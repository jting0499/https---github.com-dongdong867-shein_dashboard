import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

type Data = {
    name: string, //product
    "北部": number,
    "中部": number,
    "南部": number,
    "東部": number,
}

type Datas = {
    data: Data[],
}

const LocationClusterModel = ({ data, title }: Datas & {title: String}) => {
    return (
        <>
        <div className='w-full flex flex-col'>
            <div className="flex w-full justify-center font-bold text-lg">
			    {title}
		    </div>
            <div className="w-full p-7" style={{height: "300px"}}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                            }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="北部" stackId="a" fill="#0c365c" />
                        <Bar dataKey="中部" stackId="a" fill="#accbe1" />
                        <Bar dataKey="南部" stackId="a" fill="#3c6997" />
                        <Bar dataKey="東部" stackId="a" fill="#094074" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
        </>
    );
}

export default LocationClusterModel;