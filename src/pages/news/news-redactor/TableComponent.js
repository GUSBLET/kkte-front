import React, { useEffect, useRef,cloneElement } from 'react';
import styles from "./NewsRedactor.module.css";

export const TableComponent = ({ tableRef }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current && tableRef) {
            const tableClone = tableRef.cloneNode(true);
            containerRef.current.innerHTML = ''; // Очистите контейнер перед добавлением новой копии
            containerRef.current.appendChild(tableClone);
        }

        return () => {
            if (containerRef.current) {
                containerRef.current.innerHTML = '';
            }
        };
    }, [tableRef]);

    return <div ref={containerRef} />;
};


export const createTable = ( count, id) => {
    const columns = Array.from({ length: count }, (_, index) => (
        <div key={index} className={styles.table__cell}></div>
    ));

    return (
        <div key={id}
             id={id}
             ref={React.createRef()}
             className={styles.table__container}
             style={{ gridTemplateColumns: `repeat(${count}, 1fr)`}}
        >
            {columns}
        </div>
    );

}



export const UpdateTable = (id, tableListRef) => {
    const buffer = <TableComponent tableRef={tableListRef.current[id - 1]} />;

    return (
        <>
            <h3 className="label-modal">Редактор таблиці:</h3>
            <div style={{ background: 'white' }}>
                {buffer}
            </div>
            <div className="controller-panel">
                <button className="button-modal" onClick={(e) => {
                    e.stopPropagation();
                    let newGridTemplateColumnsValue = addColumn(tableListRef.current[id - 1].style.gridTemplateColumns);
                    tableListRef.current[id - 1].style.gridTemplateColumns = "repeat(" + newGridTemplateColumnsValue + ", 1fr)";
                    buffer.props.tableRef.style.gridTemplateColumns = "repeat(" + newGridTemplateColumnsValue + ", 1fr)";
                }}>Add Column</button>
                <button className="button-modal" onClick={(e) => {
                    e.stopPropagation();
                    let newGridTemplateColumnsValue = removeColumn(tableListRef.current[id - 1].style.gridTemplateColumns);
                    tableListRef.current[id - 1].style.gridTemplateColumns = "repeat(" + newGridTemplateColumnsValue + ", 1fr)";
                    buffer.props.tableRef.style.gridTemplateColumns = "repeat(" + newGridTemplateColumnsValue + ", 1fr)";
                }}>Remove Column</button>
            </div>
        </>
    );
};


export const addColumn = (id) => {
    let matches = id.match(/\d+/g);
    if (matches.length === 3){
        let num_1 = matches[0];
        let num_2 = matches[1];
        return  num_1.toString() + (num_2 + 1).toString();
    }
    else{
        return  parseInt(matches[0]) + 1;
    }
};

export const removeColumn = (id) => {
    let matches = id.match(/\d+/g);
    if (matches.length === 3){
        let num_1 = matches[0];
        let num_2 = matches[1];
        return num_1.toString() + (num_2 - 1).toString();
    }
    else{
        return   parseInt(matches[0]) - 1;
    }
};
