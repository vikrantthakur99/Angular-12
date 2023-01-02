import { Pipe, PipeTransform } from "@angular/core";
import { Student } from "./student";

 @Pipe({
    name:'filterStudent'
})
export class FilterPipe implements PipeTransform{
    transform(studentss :Student[],filterText: string) {
        console.log('Filter Pipe Called');
        if(studentss.length === 0 || filterText ===''){
            return studentss;
        }
        else {
            return studentss.filter((student)=>
            {
               return student.gender.toLowerCase() === filterText.toLowerCase()
            })
        }
    }
    
}