import NoReclamation from './NoReclamation';
import IReclamation from '@domaine/IReclamation';
// import { useQuery } from 'react-query';
// import { getAllReclamation } from '@apis/reclamation.service';
import { useState } from 'react';
import { AddReclamation } from './AddReclamation';

const Reclamations = () => {

  const [reclamations]=useState<IReclamation[]>([
    {
      id: '1',
      date: new Date(),
      description: 'Reclamation 1',
      reply: {
        date: new Date(),
        description: 'Reply to Reclamation 1',
      },
    },
    {
      id: '2',
      date: new Date(),
      description: 'Reclamation 2',
    },
    {
      id: '3',
      date: new Date(),
      description: 'Reclamation 3',
    },{
      id: '4',
      date: new Date(),
      description: 'recalamtions 3',
    },
    
  ]);

  // const { data: reclamations } = useQuery<IReclamation[]>('reclamations', getAllReclamation);





  return (
    <>
      <div className="fixed top-24 max-w-[740px] w-full  rounded-xl flex justify-between p-4 bg-[#22d3ee] ">
        <h3 className="text-white"> Liste des réclamations</h3>
      </div>

      {reclamations ? (
        <div className='mt-20 w-full  flex flex-col gap-4  items-center justify-start'>
          {reclamations.map((reclamation) => (
            <div key={reclamation.id} className="w-full bg-gray-100 border border-gray-300 rounded-xl  p-4">
              <p className="text-gray-800 font-bold">{reclamation.date.toDateString()}</p>
              <p className="text-gray-500">{reclamation.description}</p>
              <div className="bg-blue-200  p-2 rounded-md">
                {reclamation.reply ? (
                  <>
                    <p className="text-blue-800 font-bold">{reclamation.reply.date.toDateString()}</p>
                    <p className="text-blue-500">{reclamation.reply.description}</p>
                  </>
                ) : (
                  <p className="text-blue-800 font-bold">No reply yet</p>
                )
                }
              </div>
            </div>
          ))}
        </div>
      ) : (
        <NoReclamation />
      )}
      <AddReclamation />
    </>
  );
};

export default Reclamations;
