var library = [ 
    {
   title: 'The India Story',
   author: 'Bimal Jalal',
   alreadyread : false
   },
  {
   title: "Grand Ma's bag of Stories",
   author : "Sudgha Murthy",
   alreadyread : false
   },
  {
   title: "Two States",
   author : "Chethan Bhagat",
   alreadyread : true
  },
 {
   title: 'Lal Salam',
   author: 'Smriti Irani',
   alreadyread: true
 },
 {
   title: 'Mockingjay: The Final Book of The Hunger Games',
   author: 'Suzanne Collins',
   alreadyread: false
 }];

 for (const element of library) {
    let title=element.title
    let author=element.author
    if(element.alreadyread==true){
        console.log("You already read " +title+" by " +author)
    }
    else{
        console.log("You still need to read " +title+" by " +author)
    }
  
 }