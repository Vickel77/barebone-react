import { useState } from "react";
import Button from "../Button";
import ArrowLeft from "../icons/ArrowLeft";
import styles from "./table.module.css";

function Table({
  tableColumn,
  tableData,
}: {
  tableColumn: TableColumn;
  tableData: any;
}) {
  // const _tableData: any[] = [{}];

  const [activePage, setActivePage] = useState<number>(0);

  return (
    <div className={styles.tableWrap}>
      <table className={styles.table}>
        <thead>
          {tableColumn.map((data) => (
            <th key={data.title}>{data.title}</th>
          ))}
        </thead>
        <tbody>
          {tableData.map((data: any, idx: number) => (
            <tr key={idx}>
              {tableColumn.map((column) => (
                <td key={column.title}>
                  {column.render
                    ? column.render?.(data[column.dataIndex], data)
                    : data[column.dataIndex]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <tfoot>
        <Button
          onClick={() => activePage > 0 && setActivePage(activePage - 1)}
          label={<ArrowLeft />}
        />
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((x, idx) => (
          <Button
            onClick={() => setActivePage(idx)}
            label={x}
            type={activePage === idx ? "primary" : "text"}
          />
        ))}
        <Button
          onClick={() => activePage < 9 && setActivePage(activePage + 1)}
          label={<ArrowLeft invert />}
        />
      </tfoot>
    </div>
  );
}

export default Table;
