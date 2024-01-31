import { Table } from 'antd';



type Props<DataType extends object> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: any[];
  data: DataType[];
  loading: boolean;
};

// function TableGrid<DataType extends KeyType>({ columns, data, loading }: Props<DataType>) {
  function TableGrid<DataType extends object>({ columns, data, loading }: Props<DataType>) {


  return (
    <Table
      className=" border-gray-200 dark:border-gray-700 border bg-white dark:bg-dark-bg-main  rounded-md overflow-hidden"
      pagination={{ pageSize: 6 }}
      columns={columns}
      dataSource={data}
      loading={loading}
    />
  );
}

export default TableGrid;