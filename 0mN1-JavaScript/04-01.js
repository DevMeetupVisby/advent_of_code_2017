let d4_1=(l)=>l.split('\n').reduce((v,p)=>v+p.split(' ').reduce((r,w)=>({v:r.v&&r.l.reduce((g,h)=>g&&h!=w,1),l:[...r.l,w]}),{l:[],v:1}).v,0)