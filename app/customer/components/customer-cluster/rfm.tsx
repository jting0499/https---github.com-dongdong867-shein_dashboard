
import { PureComponent } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  {
    name: '重要價值客戶',
    顧客數: 4000,
    平均消費金額: 2400,
    amt: 2400,
  },
  {
    name: '重要發展客戶',
    顧客數: 3000,
    平均消費金額: 1398,
    amt: 2210,
  },
  {
    name: '重要保持客戶',
    顧客數: 2000,
    平均消費金額: 9800,
    amt: 2290,
  },
  {
    name: '重要挽留客戶',
    顧客數: 2780,
    平均消費金額: 3908,
    amt: 2000,
  },
  {
    name: '一般價值客戶',
    顧客數: 1890,
    平均消費金額: 4800,
    amt: 2181,
  },
  {
    name: '一般發展客戶',
    顧客數: 2390,
    平均消費金額: 3800,
    amt: 2500,
  },
  {
    name: '一般保持客戶',
    顧客數: 3490,
    平均消費金額: 4300,
    amt: 2100,
  },
  {
    name: '一般挽留客戶',
    顧客數: 2780,
    平均消費金額: 3908,
    amt: 2000,
  },
];

export default class RFM extends PureComponent {

  render() {
    console.log('RFM component is rendering!');
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
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
          <Bar dataKey="顧客數" fill="#094074" activeBar={<Rectangle fill="#f4d35e" />} />
          <Bar dataKey="平均消費金額" fill="#accbe1" activeBar={<Rectangle fill="#faf0ca" />} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

