let d1_2=(x,l)=>(l=x.length/2)&&[...x].reduce((p,n,i,a)=>n==a[i+l*(i<l?1:-1)]?p+~~n:p,0)