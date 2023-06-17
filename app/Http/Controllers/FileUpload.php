<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\File;
use App\Models\User;
use App\Mail\MailDocument;

use Illuminate\Support\Facades\Mail;

class FileUpload extends Controller
{
  public function get() {
    
    $user = User::find(auth()->id());

    if ($user->user_type === 0) {

      $files = $user->files;

    } else {

      $files = File::all();

      foreach($files as $f) $f->user;

    }

    return response()->json(['files' => $files], 200, [], JSON_NUMERIC_CHECK);

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

            $url = storage_path('app/public/uploads') . '/' . $fileName;
            $document = $fileModel->name;

            $mail = new MailDocument($url, $document);

            Mail::to('compliance@edgeinformation.com')->send($mail);

            return response()->json(['success' => 1, 'files' => $user->files ], 200, [], JSON_NUMERIC_CHECK);
        }
   }

   public function delete(Request $req) {

    $id = $req->get('id');

    $file = File::find($id);

    $file_path = str_replace('/storage/', '/app/public/', $file->file_path);

    if (file_exists(storage_path($file_path))) {

      unlink(storage_path($file_path));

    }

    $file->delete();

    return response()->json(['success' => 1]);


   }
}
