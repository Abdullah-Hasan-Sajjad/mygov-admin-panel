export default function Table({ columnNames, data }) {
    let rowNo = 1;

    return (
        <div className="sm:px-6 lg:px-6">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div className="text-gray-900">

                    <div className="relative overflow-x-auto sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase">
                                <tr>
                                    {
                                        columnNames.map((colName, index) => {
                                            return <th key={index} scope="col" className="px-6 py-3 bg-gray-50">{colName}</th>
                                        })
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((values, index) => {
                                        console.log(values)
                                        return (
                                            <tr className="border-b border-gray-200">
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50">
                                                    {rowNo++}
                                                </th>
                                                <td className="px-6 py-4 t">
                                                    <a href="#">{values.ServiceName}</a>
                                                </td>
                                                <td className="px-6 py-4 t">
                                                    <a href="#">{values.Opekkhoman}</a>
                                                </td>
                                                <td className="px-6 py-4 t">
                                                    <a href="#">{values.Dak}</a>
                                                </td>
                                                <td className="px-6 py-4 t">
                                                    <a href="#">{values.Nothi}</a>
                                                </td>
                                                <td className="px-6 py-4 t">
                                                    <a href="#">{values.Nisponno}</a>
                                                </td>
                                                <td className="px-6 py-4 t">
                                                    <a href="#">{values.Total}</a>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }


                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
}