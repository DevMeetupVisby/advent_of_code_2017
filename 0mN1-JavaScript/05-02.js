let d5_2=(i,p=0,s=0)=>{i=i.split('\n').map(x=>~~x);while(p>=0&&p<i.length&&++s)p+=(i[p]>2?i[p]--:i[p]++);return s}
