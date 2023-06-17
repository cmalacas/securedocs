import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

import React, {Component, Fragment, useCallback} from 'react';
import Dropzone from 'react-dropzone';

import Authservice from '@/Components/Authservice';
import { Button } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faFile } from '@fortawesome/free-solid-svg-icons';

import { Tooltip } from 'react-tooltip';

import 'react-tooltip/dist/react-tooltip.css'

import Swal from 'sweetalert2';

import { Link } from '@inertiajs/react';

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
                        <section className="mt-5">
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

class AllFiles extends Component {

    constructor(props) {

        super(props);

        this.state = {

            files: [],

        }

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

                        <div>{ f.user.name }</div>

                        <div className="flex justify-between">

                            <div className="flex">
                                <Button href={`${f.file_path}`} target="_blank" className="pt-1 pb-1 pl-3 pr-3 mr-1 rounded border text-white bg-blue-600 hover:bg-blue-400" data-tip="Open File">
                                    <FontAwesomeIcon icon={faFile} />
                                </Button>
                                <Button onClick={ () => this.delete(f) } className="pt-1 pb-1 pl-3 pr-3 border rounded text-white bg-red-600 hover:bg-red-400" data-tip="Delete file"><FontAwesomeIcon icon={faTrash} /> </Button>

                            </div>
                        </div>
                   </li>

        });

        return (

            <div>
                <h4 className="pt-2 pb-2 text-2xl">Files here:</h4>
                <ul>
                    { files }
                </ul>
            </div>
        )

    }


}

export default class Dashboard extends Component {

    constructor(props) {

        super(props);

    }

    render() {

        const user = this.props.auth.user;

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

                                <div className="container">      

                                    <div className="flex justify-end">

                                        <Link
                                            href="/logout"
                                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-right"
                                        >
                                                    Logout
                                        </Link>
                                    </div> 

                                    { user.user_type === 1 ?

                                        <AllFiles />

                                    :
                                    
                                        <MyFiles />

                                    }

                                    
                                    
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
