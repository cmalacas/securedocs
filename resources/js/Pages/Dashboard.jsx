import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import React, {Component, Fragment, useCallback} from 'react';
import Dropzone from 'react-dropzone';

import Authservice from '@/Components/Authservice';
import { Button } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faFile } from '@fortawesome/free-solid-svg-icons';

import { Tooltip } from 'react-tooltip';

import 'react-tooltip/dist/react-tooltip.css'

import Swal from 'sweetalert2';

class MyFiles extends Component {

    constructor(props) {

        super( props );

        this.state = {

            files: []

        }

        this.onDrop = this.onDrop.bind(this);
        this.save = this.save.bind(this);
        this.delete = this.delete.bind(this);

    }

    delete(f) {

        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            html: 'File will delete in the server and it is not undoable'
        }).then(( result) => {

            if (result.isConfirmed) {

                const files = this.state.files.filter( ff => ff.id != f.id );
                this.setState({ files });

                Authservice.post('/delete-file', { id: f.id });

            }

        });

        

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

            return <li key={f.id} className="pt-1 pb-1 border-b border-gray-100 flex justify-between">
                        <a target="_blank" href={`${f.file_path}`}>{f.name}</a>

                        <div className="flex">
                            <Button href={`${f.file_path}`} target="_blank" className="pt-1 pb-1 pl-3 pr-3 mr-1 rounded border text-white bg-blue-600 hover:bg-blue-400" data-tip="Open File">
                                <FontAwesomeIcon icon={faFile} />
                            </Button>
                            <Button onClick={ () => this.delete(f) } className="pt-1 pb-1 pl-3 pr-3 border rounded text-white bg-red-600 hover:bg-red-400" data-tip="Delete file"><FontAwesomeIcon icon={faTrash} /> </Button>
                        </div>
                   </li>

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
                    <h4 className="pt-2 pb-2 text-2xl">My Files here:</h4>
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
                <Tooltip />
            </AuthenticatedLayout>
        );

    }
}
