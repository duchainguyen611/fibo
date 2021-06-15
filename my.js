let a=0,b=1,c=1;
document.write(a+" "+b+" "+c);
for(let i=3;i<20;i++){
    d=b+c;
    b=c;
    c=d;
    document.write(" "+d);
}