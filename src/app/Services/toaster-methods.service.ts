import { Injectable, Inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ToastrMethodService {

    constructor(@Inject(ToastrService) private toastr:ToastrService) { }

    showSuccess(message:string,title?:string){
        this.toastr.success(message,title)
    }
    showInfo(message:string,title?:string){
        this.toastr.info(message,title)
    }
    showWarning(message:string,title?:string){
        this.toastr.warning(message,title)
    }
    showError(message:string,title?:string){
        this.toastr.error(message,title)
    }
}