import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import React, {Component, Fragment, useCallback} from 'react';
import Dropzone from 'react-dropzone';

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

class MyFiles extends Component {

    constructor(props) {

        super( props );

        this.state = {

            files: []

        }

        this.onDrop = this.onDrop.bind(this);
        this.save = this.save.bind(this)

    }

    save(data) {

        Authservice.post('/upload-file', data)
        .then(response => {

            if (response.files) {

                const files = response.files;

                this.setState({ files });

            }

        })
        
    }
    
    onDrop(acceptedFiles) {

        const data = new FormData();
    
        acceptedFiles.forEach((file, index) => {
            data.append(`file`, file, file.name);
        });
    
        this.save(data);
        
    };


    componentDidMount() {

        Authservice.post('/get-my-files', [])
        .then( response => {

            if (response.files) {

                const files = response.files;

                this.setState({ files });

            }

        })

    }

    render() {

        const files = this.state.files.map( f => {

            return <li>{f.name}</li>

        });

        return (

            <div>
               <Dropzone onDrop={this.onDrop}>
                    {({getRootProps, getInputProps}) => (
                        <section>
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <p className="border p-2 text-center">Click here to upload file</p>
                            </div>
                        </section>
                    )}
                </Dropzone>

                <div>
                    My Files here:      
                    <ul>
                        { files }
                    </ul>
                </div>
            </div>

        )
    }        

}

export default class Dashboard extends Component {

    constructor(props) {

        super(props);

    }

    render() {

        return (
            <AuthenticatedLayout
                auth={this.props.auth}
                errors={this.props.errors}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
            >
                <Head title="Dashboard" />

                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">

                                <div className="container mt-5">       
                                    
                                    <MyFiles />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        );

    }
}
