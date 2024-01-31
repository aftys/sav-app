import { Link } from 'react-router-dom';
import { Select } from 'antd';
import NoAppointments from './NoAppointment';
// import IAppointment from '@domaine/IAppointment';
// import { getAppointmentByTYpe } from '@apis/appointment.service';

const Appointments = () => {
  const appointments = [
    // {
    //   id: '1',
    //   day: new Date(),
    //   hour: new Date(),
    //   state: 'confirme',
    //   type: 'standart',
    // },
    {
      id: '2',
      day: '31-0162024',
      hour: '13:00',
      state: 'confirme',
      type: 'standart',
    },
    // {
    //   id: '3',
    //   day: new Date(),
    //   hour: new Date(),
    //   state: 'realise',
    //   type: 'standart',
    // },
    // {
    //   id: '4',
    //   day: new Date(),
    //   hour: new Date(),
    //   state: 'reporte',
    //   type: 'standart',
    // },
    // {
    //   id: '5',
    //   day: new Date(),
    //   hour: new Date(),
    //   state: 'annule',
    //   type: 'standart',
    // },
  ];
  // const user={id:'1',name:'user1'};
  // const [type,setType]=useState<string>('all');


  // const { data: appointments } = useQuery<IAppointment[]>(['appointments',type], ()=>{getAppointmentByTYpe(type,user.id);});

  const getBackgroundColor = (state: string) => {
    switch (state) {
      case 'confirme':
        return 'green';
      case 'attente':
        return 'gray';
      case 'realise':
        return 'blue';
      case 'reporte':
        return 'orange';
      case 'annule':
        return 'red';
      default:
        return 'gray';
    }
  };

  return (
    <>
      <div className="fixed top-24 max-w-[740px] w-full  rounded-xl flex justify-between p-4 bg-[#22d3ee] text-white">
        <h3>Liste des rendez-vous</h3>
        <div className="flex gap-2">
          <Select
            defaultValue="all"
            style={{ width: 120, borderRadius: '40px' }}
            // onChange={(value:string) => {setType(value) ;}}
            options={[
              { value: 'confirme', label: 'Confirmé' },
              { value: 'en_attente', label: 'En attente' },
              { value: 'realise', label: 'Réalisé' },
              { value: 'reporte', label: 'Reporté' },
              { value: 'annule', label: 'Annulé' },
              { value: 'all', label: 'Tous' },
            ]}
          />
          <Link className="bg-white flex items-center justify-center text-gray-800 px-2 rounded-md text-sm font-normal" to="/add-calendar">
            ajouter
          </Link>
        </div>
      </div>

      {appointments.length !== 0 ? (
        <div className='w-full mt-20 flex flex-col gap-4  items-center justify-start'>
          {appointments.map((appointment) => (
            <div
              key={appointment.id}
              className={`w-full h-20  bg-gray-100 rounded-xl p-4 flex items-center justify-between`}
            >
              <div>
                <p className=" text-gray-800 font-bold">{appointment.day}</p>
                <p className=" text-gray-500">{appointment.hour}  <span style={{ color: getBackgroundColor(appointment.state) }}>{appointment.state}</span></p>
              </div>

              {appointment.state=='attente' && <button className="text-white text-md px-2  rounded-xl bg-gray-400 flex items-center justify-center">annuler</button>} 

            </div>
          ))}
        </div>
      ) : (
        <NoAppointments />
      )}
    </>
  );
};

export default Appointments;