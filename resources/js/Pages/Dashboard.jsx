import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import React, {useCallback} from 'react';
import { useDropzone } from 'react-dropzone';

import Authservice from '@/Components/Authservice';

function MyDropzone() {
    
    const save = (data) => {

        Authservice.post('/upload-file', data);
        
    }
    
    const onDrop = useCallback(acceptedFiles => {

        const data = new FormData();
    
        acceptedFiles.forEach((file, index) => {
            data.append(`file`, file, file.name);
        });
    
        save(data);
        
    }, []);

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  
    return (
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop the files here ...</p> :
            <p>Drag 'n' drop some files here, or click to select files</p>
        }
      </div>
    )
  }

function MyFiles() {

    const getMyFiles =  {

        

    };

    return (

        <div>
            My Files here
        </div>

    )


}

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">

                            <div class="container mt-5">       
                                <MyDropzone />
                                <MyFiles />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
