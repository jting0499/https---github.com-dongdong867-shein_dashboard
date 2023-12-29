import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

type Data = {
    name: string, //product
    "20歲以下": number,
    "20~30歲": number,
    "31~45歲": number,
    "46~60歲": number,
    "60歲以上": number,
}

type Datas = {
    data: Data[],
}

const AgeClusterModel = ({ data, title }: Datas & {title: String}) => {
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
                        {/* #0d3b66 #faf0ca #f4d35e #ee964b #f95738 ffeecf d6e3f8 accbe1 cee5f2 */}
                        <Bar dataKey="20歲以下" stackId="a" fill="#0c365c" />
                        <Bar dataKey="20~30歲" stackId="a" fill="#accbe1" />
                        <Bar dataKey="31~45歲" stackId="a" fill="#3c6997" />
                        <Bar dataKey="46~60歲" stackId="a" fill="#094074" />
                        <Bar dataKey="60歲以上" stackId="a" fill="#d4e9f5" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
        </>
    );
}

export default AgeClusterModel;