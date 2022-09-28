import React from 'react';
export class Marksheet extends React.Component{
      constructor(){
        super()
        this.state = {p: 85, c: 88, m: 99, e: 65, h: 75, res:"", res2:"", res3:"", res4:"", res5:""}
      }     
      Calculate(){
            var {p, c, m, e, h, res, res2, res3, res4, res5} = this.state
            if(p<0 || p>100 || c<0 || c>100 || m<0 || m>100 || e<0 || e>100 || h<0 || h>100){
                this.setState({res: "invalid marks"})
            }
            else{
                 var cnt = 0;
                 var s = '';
                 var sd = '';
                 var g = 0;
                 var pass = '';
                 var per = 0;
                 if(p >= 75){
                      sd = sd + "Physics with " + p + " marks ";
                 }
                 if(c >= 75){
                    sd = sd + "Chemistry with " + c + " marks ";
                 }
                if(m >= 75){
                  sd = sd + "Mathematics with " + m + " marks ";
               }
               if(e >= 75){
                sd = sd + "English with " + e + " marks ";
               }
               if(h >= 75){
                sd = sd + "Hindi with " + h +" marks ";
               }  
               if(p >= 75 || c >= 75 ||  m >= 75 || e >= 75 || h >= 75){
                        this.setState({res2: "Distinction(s) in " + sd})               
               }
                 if(p<33){
                    cnt = cnt + 1;
                    g = p;
                    s = s + "Physics" + " ";
                 }
                 if(c<33){
                      cnt = cnt + 1;
                      g = c;
                      s = s + "Chemistry" + " ";
                 }
                  if(m<33){
                    cnt = cnt + 1;
                    g = m;
                    s = s + "Maths" + " ";
               }
                if(e<33){
                cnt = cnt + 1;
                g = e;
                s = s + "English" + " ";
               }
               if(h<33){
                cnt = cnt + 1;
                g = h;
                s = s + "Hindi" + " ";
               }  
               if(cnt == 0 || (cnt==1 && g>=28)){
                     per = (p+c+m+e+h)/5
                    if(cnt==1){
                        per = per + (33-g)/5
                    }
                    if(per >= 33 && per < 45 ){
                                pass = pass + "passed in 3rd division with "+ per+"%"              
                    }
                    else if(per < 60){
                        pass = pass + "passed in 2nd division with "+ per+"%"              
                    }
                    else{
                        pass = pass + "passed in 1st division with "+ per+"%"              
                    }
                    if (cnt == 1){
                        pass = pass + "with  grace marks and grace marks are "+(33-g)+" and grace subject is "+s
                    }
                   this.setState({res3: pass})
               }
               else if(cnt == 1){
                  per = (p+c+m+e+h)/5
                  this.setState({res4: "supplimentry in subject " + s + "and percentage are " + per + "%"})
               }
               else {
                    this.setState({res5: "failed in subject(s) " + s})
               }
               
            }
      }
      render(){
        return(
            <div onLoad={this.Calculate()}> 
                   <h1> {this.state.res} </h1>
                   <h1> {this.state.res2}</h1>
                   <h1> {this.state.res3}</h1>
                   <h1> {this.state.res4}</h1>
                   <h1> {this.state.res5}</h1>
            </div>
        )
      }
}