import * as XLSX from 'xlsx';
import {handler} from '../../api/index';
import { ExportToExcel } from '../../../Component/ExportToExcel';
export default function DownloadExcel({Votes}) {
   
    return (
      <div className="App">
      <ExportToExcel apiData={Votes} />
    </div>
    );
}

export async function getServerSideProps() {
    const Votes = await handler('http://127.0.0.1:8000/api/votes')
    return{
        props : { 
            Votes,
        }
    }
  }