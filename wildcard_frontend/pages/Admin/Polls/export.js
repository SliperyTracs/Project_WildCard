import json2xls from 'json2xls';
import { handler } from '../../api';

const data = [
  {
    name: 'John Smith',
    age: 30,
    city: 'New York'
  },
  {
    name: 'Jane Doe',
    age: 25,
    city: 'Chicago'
  }
];


export default function DownloadExcel({Votes}) {
    function Export(data){
         // Convert the data to an Excel file
        const xls = json2xls(data);
    
        // Set the file name and send the Excel file to the user as a download
        context.res.setHeader('Content-Disposition', 'attachment; filename=data.xlsx');
        context.res.end(xls, 'binary');
    }
    return (
        <div>
        <a onClick={Export(Votes)}>Download Excel</a>
        </div>
    );
}
export async function getServerSideProps() {
    const Votes = await handler('http://127.0.0.1:8000/api/votes')
    console.log(Votes)
    return{
        props : { 
            Votes,
        }
    }
  }