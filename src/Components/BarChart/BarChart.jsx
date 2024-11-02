import { BarChart as BChart, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const BarChart = () => {
    const studentMarksData = [
        { id: 1, name: "Alice", math: 78, physics: 82, chemistry: 74 },
        { id: 2, name: "Bob", math: 85, physics: 79, chemistry: 88 },
        { id: 3, name: "Charlie", math: 92, physics: 91, chemistry: 84 },
        { id: 4, name: "David", math: 74, physics: 68, chemistry: 76 },
        { id: 5, name: "Eva", math: 88, physics: 85, chemistry: 80 },
        { id: 6, name: "Frank", math: 95, physics: 89, chemistry: 92 },
        { id: 7, name: "Grace", math: 81, physics: 78, chemistry: 79 },
        { id: 8, name: "Hannah", math: 69, physics: 72, chemistry: 70 },
        { id: 9, name: "Ian", math: 76, physics: 84, chemistry: 82 },
        { id: 10, name: "Jack", math: 90, physics: 88, chemistry: 87 }
      ];
      

    return (
        <div className="chart-container" style={{ width: '100%', height: '400px' }}>
            <ResponsiveContainer width="100%" height="100%">
                <BChart data={studentMarksData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="physics" fill="blue" />
                </BChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarChart;
