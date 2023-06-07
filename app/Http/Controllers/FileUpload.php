<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\File;
use App\Models\User;

class FileUpload extends Controller
{
  public function createForm(){
    return view('file-upload');
  }

  public function fileUpload(Request $req){

        $user_id = auth()->id();

        $user = User::find($user_id);

        $req->validate([
          'file' => 'required|mimes:csv,txt,xlx,xls,pdf,docx,doc'
        ]);
        
        $fileModel = new File;

        if($req->file()) {
          
            $fileName = time().'_'.$req->file->getClientOriginalName();
            $filePath = $req->file('file')->storeAs('uploads', $fileName, 'public');
            $fileModel->name = time().'_'.$req->file->getClientOriginalName();
            $fileModel->file_path = '/storage/' . $filePath;
            $fileModel->user_id = auth()->id();

            $fileModel->save();

            return response()->json(['success' => 1, 'files' => $user->files ], 200, [], JSON_NUMERIC_CHECK);
        }
   }
}
