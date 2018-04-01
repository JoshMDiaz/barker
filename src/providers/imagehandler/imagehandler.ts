import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';
import { FileChooser } from '@ionic-native/file-chooser';
import firebase from 'firebase';
import { Crop } from '@ionic-native/crop';


@Injectable()
export class ImagehandlerProvider {
  nativepath: any;
  firestore = firebase.storage();
  constructor(public fileChooser :FileChooser,public filePath:FilePath, public file :File,private crop: Crop,public loadingCtrl: LoadingController) {
    console.log('Hello ImagehandlerProvider Provider');
  }
  uploadimage() {
    let loader = this.loadingCtrl.create({
      content: 'Please wait'
    });
    loader.present();
    var promise = new Promise((resolve, reject) => {
      this.fileChooser.open().then((urlfull) => {
        this.crop.crop(urlfull).then((url)=>{
        (<any>window).FilePath.resolveNativePath(url, (result) => {
            this.nativepath = result;
            (<any>window).resolveLocalFileSystemURL(this.nativepath, (res) => {
              res.file((resFile) => {
                var reader = new FileReader();
                reader.readAsArrayBuffer(resFile);
                reader.onloadend = (evt: any) => {
                  var imgBlob = new Blob([evt.target.result], { type: 'image/jpeg' });
                  var imageStore = this.firestore.ref('/profileimages').child(firebase.auth().currentUser.uid);
                  imageStore.put(imgBlob).then((res) => {
                    this.firestore.ref('/profileimages').child(firebase.auth().currentUser.uid).getDownloadURL().then((url) => {
                      resolve(url);
                      loader.dismiss();
                    }).catch((err) => {
                      loader.dismiss();
                        reject(err);
                    })
                  }).catch((err) => {
                    loader.dismiss();
                    reject(err);
                  })
                }
              })
            })
          })
        })
      })
      loader.dismiss();
    })
    return promise;

  }
  picmsgstore() {
    var promise = new Promise((resolve, reject) => {
        this.fileChooser.open().then((url) => {
          (<any>window).FilePath.resolveNativePath(url, (result) => {
            this.nativepath = result;
            (<any>window).resolveLocalFileSystemURL(this.nativepath, (res) => {
              res.file((resFile) => {
                var reader = new FileReader();
                reader.readAsArrayBuffer(resFile);
                reader.onloadend = (evt: any) => {
                  var imgBlob = new Blob([evt.target.result], { type: 'image/jpeg' });
                  var uuid = this.guid();
                  var imageStore = this.firestore.ref('/picmsgs').child(firebase.auth().currentUser.uid).child('picmsg' + uuid);
                  imageStore.put(imgBlob).then((res) => {
                      resolve(res.downloadURL);
                    }).catch((err) => {
                        reject(err);
                    })
                  .catch((err) => {
                    reject(err);
                  })
                }
              })
            })
          })
      })
    })
     return promise;
  }
  guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
 }
}
