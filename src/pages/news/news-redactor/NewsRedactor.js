import React, {useEffect, useRef, useState, cloneElement } from "react";
import ReactDOMServer from 'react-dom/server';
import { Formik, Field, ErrorMessage, Form } from "formik";
import styles from './NewsRedactor.module.css';
import ControllerPanelButton from "./ControllePanelButton";
import ModalWindow from "../../../components/ModalWindow/ModalWindow";
import NewsService from "../../../services/NewsService";
import {createTable, UpdateTable} from "./TableComponent";



function NewsRedactor() {
    const newsService = new NewsService();

    const [modalActive, setModalActive] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const fontNameRef = useRef(null);
    const fontSizeRef = useRef(null);
    const columnCountRef = useRef(null);
    const editableDivRef = useRef(null);
    const contentRef = useRef(null);
    const tableListRef = useRef([]);

    const buttonsConfig = [
        { id: 'bold', icon: 'fa-solid fa-bold', class: 'option-button format button-controller-bar'},
        { id: 'italic', icon: 'fa-solid fa-italic', class: 'option-button format button-controller-bar'},
        { id: 'underline', icon: 'fa-solid fa-underline', class: 'option-button format button-controller-bar'},
        { id: 'strikethrough', icon: 'fa-solid fa-strikethrough', class: 'option-button format button-controller-bar'},
        { id: 'superscript', icon: 'fa-solid fa-superscript', class: 'option-button script button-controller-bar'},
        { id: 'subscript', icon: 'fa-solid fa-subscript', class: 'option-button script button-controller-bar'},
        { id: 'insertOrderedList', icon: 'fa-solid fa-list-ol', class: 'option-button button-controller-bar'},
        { id: 'insertUnorderedList', icon: 'fa-solid fa-list', class: 'option-button button-controller-bar'},
        { id: 'addTable', icon: 'fa-solid fa-table', class: 'button-controller-bar', action: () => {
                setModalActive(true);
                setModalContent(
                    <>
                        <label htmlFor="columns-count" className="label-modal">
                            Количество колонок:
                        </label>
                        <input
                            ref={columnCountRef}
                            type="number"
                            min="1"
                            className="input-number-modal"
                        />
                        <button onClick={addNewTable} className="button-modal">
                            Создать таблицу
                        </button>
                    </>
                )
            }},
        { id: 'undo', icon: 'fa-solid fa-rotate-left', class: 'option-button button-controller-bar'},
        { id: 'redo', icon: 'fa-solid fa-rotate-right', class: 'option-button button-controller-bar'},
        { id: 'justifyLeft', icon: 'fa-solid fa-align-left', class: 'option-button align button-controller-bar'},
        { id: 'justifyCenter', icon: 'fa-solid fa-align-center', class: 'option-button align button-controller-bar'},
        { id: 'justifyRight', icon: 'fa-solid fa-align-right', class: 'option-button align button-controller-bar'},
        { id: 'justifyFull', icon: 'fa-solid fa-align-justify', class: 'option-button align button-controller-bar'},
        { id: 'indent', icon: 'fa-solid fa-indent', class: 'option-button spacing button-controller-bar'},
        { id: 'outdent', icon: 'fa-solid fa-outdent', class: 'option-button spacing button-controller-bar'},
        { id: 'unlink', icon: 'fa fa-unlink', class: 'option-button button-controller-bar'},
        { id: 'createLink', icon: 'fa fa-link', class: 'adv-option-button button-controller-bar'},
        { id: 'showResult', icon: 'fa-solid fa-display', class: 'button-controller-bar', action: () => showResult()}

    ];
    const fontList = [
        "Arial",
        "Verdana",
        "Times New Roman",
        "Garamond",
        "Georgia",
        "Courier New",
        "cursive",
    ];




    useEffect(() => {
        let linkButton = document.getElementById("createLink")
        linkButton.addEventListener("click", () => {
            let userLink = prompt("Enter a URL");
            //if link has http then pass directly else add https
            if (/http/i.test(userLink)) {
                modifyText(linkButton.id, false, userLink);
            } else {
                userLink = "http://" + userLink;
                modifyText(linkButton.id, false, userLink);
            }
        });

        if (fontNameRef.current) {
            fontList.forEach((value) => {
                let option = document.createElement("option");
                option.value = value;
                option.innerHTML = value;
                fontNameRef.current.appendChild(option);
            });
        }

        if (fontSizeRef.current) {
            for (let i = 1; i <= 7; i++) {
                let option = document.createElement("option");
                option.value = i.toString();
                option.innerHTML = i.toString();
                fontSizeRef.current.appendChild(option);
            }
        }

        fontSizeRef.value = 3;
    }, []);



    const validateForm = (values) => {
        const errors = {};
        if (!values.title) {
            errors.title = "Required";
        }
        if (!values.content) {
            errors.content = "Required";
        }
        if (!values.shortDescription) {
            errors.shortDescription = "Required";
        }
        return errors;
    }

    const handleSubmit = (values, { setSubmitting }) => {
        fetch("http://localhost:9999/news/create-news", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(values)
        })
            .then((response) => response.json())
            .then((data) => {
                setSubmitting(false);
            })
            .catch((error) => {
                console.error("Ошибка при отправке запроса:", error);
                setSubmitting(false);
            });
    };

    const modifyText = (command, defaultUi, value) => {
        //execCommand executes command on selected text
        document.execCommand(command, defaultUi, value);
    };

    useEffect(() => {
        editableDivRef.current.addEventListener("input", function () {
            contentRef.current.value = editableDivRef.current.innerHTML;
        });
    }, [editableDivRef]);

    const addNewTable = () => {
        if(columnCountRef.current.value === "") return null;
        let idTable = tableListRef.current.length + 1;
        const newTable = createTable(columnCountRef.current.value, 'table_' + idTable);

        editableDivRef.current.insertAdjacentHTML('beforeend', ReactDOMServer.renderToString(newTable));
        editableDivRef.current.insertAdjacentHTML('beforeend', '<br/>');
        let table = editableDivRef.current.querySelector('#table_' + idTable);
        table.ondblclick = () => updateModal(idTable);

        tableListRef.current.push(table);

        setModalActive(false);
    }

    const updateModal = (idTable) => {
        setModalActive(true);
        setModalContent(UpdateTable(idTable, tableListRef));
    }




    const showResult = () => {
        let content = editableDivRef.current.innerHTML;

        let newWindow = window.open('', '_blank');

        newWindow.document.write(`<html><head><title>Новая Страница</title> 
             <style>
                
                    .${styles.table__cell} {
                        border: 1px solid #000;
                        padding: 10px;
                    }
                    .${styles.table__container} {
                        display: grid;
                        border: 1px solid #000;
                    }
                </style>
            </head><body>`);
        newWindow.document.write('<div>' + content + '</div>');
        newWindow.document.write('</body></html>');
        newWindow.document.close();
    }

    return (
        <div>

        <div className={styles.container}>
            <div className={styles.options}>


                {buttonsConfig.map((button) => (
                    <ControllerPanelButton key={button.id} button={button}/>
                ))}

                <select onChange={(event) => modifyText(event.target.id, false, event.target.value)} id="formatBlock" className="adv-option-button">
                    <option value="H1">H1</option>
                    <option value="H2">H2</option>
                    <option value="H3">H3</option>
                    <option value="H4">H4</option>
                    <option value="H5">H5</option>
                    <option value="H6">H6</option>
                </select>

                <select onChange={(event) => modifyText(event.target.id, false, event.target.value)} id="fontName" ref={fontNameRef} className="adv-option-button"></select>
                <select onChange={(event) => modifyText(event.target.id, false, event.target.value)} id="fontSize" ref={fontSizeRef} className="adv-option-button"></select>

                <div className="input-wrapper">
                    <input onChange={(event) => modifyText(event.target.id, false, event.target.value)}  type="color" id="foreColor" className="adv-option-button"/>
                    <label htmlFor="foreColor">Font Color</label>
                </div>
                <div className="input-wrapper">
                    <input onChange={(event) => modifyText(event.target.id, false, event.target.value)} type="color" id="backColor" className="adv-option-button"/>
                    <label htmlFor="backColor">Highlight Color</label>
                </div>
            </div>

            <Formik
                initialValues={{
                    id: 0,
                    title: "",
                    shortDescription: "",
                    content: "",
                }}
                validate={validateForm}
                onSubmit={newsService.getNewsCards}>
                {() => (
                    <Form>

                        <div>
                            <label htmlFor="title" text="Header "/>
                            <Field type="text" name="title" id="create-header" required placeholder="Enter the title" className="adv-option-button" />
                            <ErrorMessage name="title" component="div" className="error-message" />
                        </div>

                        <div id="scroll-container" className={styles.scrollContainer}>
                            <div id="text-input"
                                 ref={editableDivRef}
                                 className={styles.textInput} contentEditable="true"></div>
                        </div>
                        <Field type="hidden" id="hidden-input-content" innerRef={contentRef} />
                        <ErrorMessage name="name" component="div" className="error-message" />

                        <div className="buttons">
                            <button type="submit">Save</button>
                            {/*<button type="button" onClick="window.location.href='/news/home'">Cancel</button>*/}
                        </div>
                    </Form>
                    )}
            </Formik>

        </div>

            <ModalWindow active={modalActive} setActive={setModalActive}>
                {modalContent}
            </ModalWindow>

        </div>

    );
}


export default NewsRedactor;