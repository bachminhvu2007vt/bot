 /**
* @author CallmeSun
* @warn Vui lòng không sửa credits cảm ơn !
*/
module.exports.config = {
  name: "mông",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "CallmeSun",
  description: "Random Ảnh Mông Gái Cực Bổ Mắt ( Lưu Ý Đây Là Lệnh Ảnh 18+ Cân Nhắc Trước Khi Sử Dụng)",
  commandCategory: "Random-img",
  usages: "mông",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/pKeyu4X.jpg",
"https://i.imgur.com/ZO166Og.jpg",
"https://i.imgur.com/wcLr01s.jpg",
"https://i.imgur.com/woJxed7.jpg",
"https://i.imgur.com/SJc7ZUa.jpg",
"https://i.imgur.com/aAspPIp.jpg",
"https://i.imgur.com/b5rrNWe.jpg",
"https://i.imgur.com/vgS8980.jpg",
"https://i.imgur.com/PyMRqjO.jpg",
"https://i.imgur.com/TrsfTXx.jpg",
"https://i.imgur.com/GsTHgKN.jpg",
"https://i.imgur.com/IYggqjD.jpg",
"https://i.imgur.com/24V5APZ.jpg",
"https://i.imgur.com/nfWKOFk.jpg",
 "https://i.imgur.com/EIAzjE5.jpg",
 "https://i.imgur.com/SpKu2ga.jpg",
 "https://i.imgur.com/W6PGVIW.jpg",
 "https://i.imgur.com/C18d9JF.jpg",
 "https://i.imgur.com/HZiR0hM.jpg",
 "https://i.imgur.com/hzCGqhz.jpg",
 "https://i.imgur.com/Mp76CBf.jpg",
 "https://i.imgur.com/nYJFGAS.jpg",
 "https://i.imgur.com/nvus52I.jpg",
 "https://i.imgur.com/GJ3qlyS.jpg",
 "https://i.imgur.com/FMxnZjQ.jpg",
 "https://i.imgur.com/wSmaoCM.jpg",
 "https://i.imgur.com/nCl64c2.jpg",
 "https://i.imgur.com/G9v53bw.jpg",
 "https://i.imgur.com/1bZPaxD.jpg",
 "https://i.imgur.com/IfhSVfi.jpg",
 "https://i.imgur.com/uf2HP7B.jpg",
 "https://i.imgur.com/Q5jgc1w.jpg",
 "https://i.imgur.com/1IFldvh.jpg",
 "https://i.imgur.com/yzhxm1c.jpg",
 "https://i.imgur.com/7QOdWUn.jpg",
 "https://i.ibb.co/BHJBfzy/4.jpg",
    "https://i.ibb.co/hZKdYmg/5.jpg",
    "https://i.ibb.co/F77954T/6.jpg",
    "https://i.ibb.co/1qgxMb2/15-Nhu-ng-Ca-p-Mo-ng-to-tro-n-va-go-i-ca-m-Nha-t-Vie-t-Nam.jpg",
    "https://i.ibb.co/r4rNTpc/199238105-562554381406895-5782914944335619591-n.jpg",
    "https://i.ibb.co/6w56kxn/199492833-562554304740236-4123593812089269663-n.jpg",
    "https://i.ibb.co/Qcm42Gy/199709779-196705369010548-566295206699203662-n.jpg",
    "https://i.ibb.co/H2sLvN3/200875246-202127538468331-7779427193908514810-n.jpg",
    "https://i.ibb.co/SJ0GyCB/204612935-564523587876641-6564157785643907451-n.jpg",
    "https://i.ibb.co/5Fv4qZp/207782052-1517285221942717-7262323336180383332-n.jpg",
    "https://i.ibb.co/Br6pHfQ/209732163-129244862710504-3650611254101339057-n.jpg",
    "https://i.ibb.co/3dPxvkd/210160428-840585346851801-232419187372538370-n.jpg",
    "https://i.ibb.co/B3VPsdM/211098793-564523711209962-494952476294016898-n.jpg",
    "https://i.ibb.co/8NfRSNN/211358119-499241837848978-7672699658134572376-n.jpg",
    "https://i.ibb.co/XyR1w3r/216989036-339670804307429-7501059566011360963-n.jpg",
    "https://i.ibb.co/YPXC7db/217044015-339670884307421-2230329832154134404-n.jpg",
    "https://i.ibb.co/VDsMTPJ/217178276-339670747640768-6230623718558810425-n.jpg",
    "https://i.ibb.co/Tqtpvbw/217664837-2908158646109792-5884168288097436150-n.jpg",
    "https://i.ibb.co/qCR1CRY/217711163-339670840974092-3809261019175304029-n.jpg",
    "https://i.ibb.co/37mvKfy/230515186-1543763632628209-5241979143383109681-n.jpg",
    "https://i.ibb.co/L8PDGFP/236565333-379186890279774-8779285141661229325-n.jpg",
    "https://i.ibb.co/6FLBcWF/239183209-163423662598109-8754671418612976237-n.jpg",
    "https://i.ibb.co/zHHqNBK/239413028-1169548070195092-1166285985278011523-n.jpg",
    "https://i.ibb.co/7bSR6jS/239742852-907216580197078-8544109835890455474-n.jpg",
    "https://i.ibb.co/1s3SM10/239856468-371868814403478-7238295627462156184-n.jpg",
    "https://i.ibb.co/PYgf0N3/240105216-108302638245114-8873891489717875610-n.jpg",
    "https://i.ibb.co/PTcKLHz/240240519-1235457563583855-6327231923048703000-n.jpg",
    "https://i.ibb.co/hZKdYmg/5.jpg",
    "https://i.ibb.co/NTfG9Gf/240390473-110220588053319-5330182276611809525-n.jpg",
    "https://i.ibb.co/zPLLz5N/240391841-104689678613713-5143036412748176930-n.jpg",
    "https://i.ibb.co/wSbhrVz/240395957-106133301802684-2593523313776356264-n.jpg",
    "https://i.ibb.co/5FXKDVz/240399951-1304089920048879-1978253265981905959-n.jpg",
    "https://i.ibb.co/3W2fD9g/240446081-103937752022239-7574319701642081351-n.jpg",
    "https://i.ibb.co/vm7fvph/240452737-110628944679150-8643984760231567118-n.jpg",
    "https://i.ibb.co/gFdWXss/240458642-106203645128983-1590062515821451119-n.jpg",
    "https://i.ibb.co/6BZKp6k/240471599-1027503771332474-7475918490841239985-n.jpg",
    "https://i.ibb.co/MMxN9y9/240471976-105520245197323-1772618133539836103-n.jpg",
    "https://i.ibb.co/r4HV6Zh/240519280-1772158939643574-3127927382558873692-n.jpg",
    "https://i.ibb.co/tMQyh0K/240590037-104036008679080-2735342738416906849-n.jpg",
    "https://i.ibb.co/cXrrFY0/240601453-3427045730899477-1641463384058034311-n.jpg",
    "https://i.ibb.co/G313xm4/240673102-240525481283260-6433567899817297700-n.jpg",
    "https://i.ibb.co/JQCnkzH/240676525-371868911070135-5444860931426905769-n-1.jpg",
    "https://i.ibb.co/JQCnkzH/240676525-371868911070135-5444860931426905769-n-1.jpg",
    "https://i.ibb.co/9btZ7zF/240699090-391732662294216-1923147790922971682-n.jpg",
    "https://i.ibb.co/ZYpcVdX/240709184-391732705627545-3433468010463687652-n.jpg",
    "https://i.ibb.co/1X1r4ZP/240713911-1256206121513977-4894459782358305881-n.jpg",
    "https://i.ibb.co/BcVbJ2D/240745386-207415594761997-5171072726617268341-n.jpg",
    "https://i.ibb.co/Wf02fzt/240757420-2842770119386389-1936864789297970038-n-1.jpg",
    "https://i.ibb.co/Wf02fzt/240757420-2842770119386389-1936864789297970038-n-1.jpg",
    "https://i.ibb.co/tcvgbVY/240785725-371683881122003-2841886007758936447-n.jpg",
    "https://i.ibb.co/k8xfcZF/240791308-394868858647263-401579012849664601-n.jpg",
    "https://i.ibb.co/n3TXW3z/240797931-989096638598069-6667950875663585941-n.jpg",
    "https://i.ibb.co/D90FrgN/240821572-2839709233025811-106868049275658651-n.jpg",
    "https://i.ibb.co/Pz7Pd38/240822189-394281728705976-2267918365330410731-n.jpg",
    "https://i.ibb.co/W2DRW3B/240822896-540371160411636-7395075710422068961-n.jpg",
    "https://i.ibb.co/FVmk4nb/240825324-394514968682652-4870464970997449965-n.jpg",
    "https://i.ibb.co/0mksQnr/240828300-394281832039299-4495952948301037266-n.jpg",
    "https://i.ibb.co/NrBwHgj/240828812-394868731980609-9085254943701954035-n.jpg",
    "https://i.ibb.co/QPp5Rpt/240835963-241960521139756-866564296147479312-n.jpg",
    "https://i.ibb.co/sV3RKT2/240852783-10226843500216144-5371980850661755391-n.jpg",
    "https://i.ibb.co/WsnSzsy/240867696-394868825313933-4326079677465722810-n.jpg",
    "https://i.ibb.co/xDG1FbP/240868139-298216792067279-1460911407894423965-n.jpg",
    "https://i.ibb.co/Dt3vDsd/240868549-394281795372636-681683011009613943-n.jpg",
    "https://i.ibb.co/fMhwj76/240873891-2842770199386381-5999916249941996923-n-1.jpg",
    "https://i.ibb.co/LJGp5Vc/240873891-2842770199386381-5999916249941996923-n.jpg",
    "https://i.ibb.co/pWjkjyk/240874368-394868778647271-5499964166515810363-n.jpg",
    "https://i.ibb.co/QbtTc6N/240882229-891004971817890-2736395515183864441-n.jpg",
    "https://i.ibb.co/WtZzy13/240899243-10226843500296146-1336585271399956387-n.jpg",
    "https://i.ibb.co/tbNZ2n5/240899924-110356238039754-8339615466935025459-n.jpg",
    "https://i.ibb.co/nCR6sG3/240912319-2843000062696728-2027000350421671653-n.jpg",
    "https://i.ibb.co/BHJBfzy/4.jpg",
    "https://i.ibb.co/5rVzwvR/240924151-2843000306030037-1591030975603913332-n.jpg",
    "https://i.ibb.co/VvchrHV/240934771-394281765372639-7899178607820767837-n.jpg",
    "https://i.ibb.co/4s6P3FW/240939455-165823785623708-486915078024229370-n.jpg",
    "https://i.ibb.co/LPYF7d9/240943222-2258162031005526-3664553341482635122-n.jpg",
    "https://i.ibb.co/MZ1WgCM/240950108-111178714625733-7809067058711443709-n.jpg",
    "https://i.ibb.co/f04FvVS/240988855-582121766490285-9005382842344787768-n.jpg",
    "https://i.ibb.co/kh8NkLR/241124752-1563483920656180-9165786724627968298-n.jpg",
    "https://i.ibb.co/VTz3S8S/241178978-1057660901708070-6640928389867027184-n.jpg",
    "https://i.ibb.co/kHKNWS7/241239825-584054159630379-4218932257394519844-n.jpg",
    "https://i.ibb.co/F77954T/6.jpg",
    "https://i.ibb.co/hMFtXdK/241412247-584054209630374-639650651171399534-n.jpg",
    "https://i.ibb.co/cQQ9SzV/241461753-168786268660793-5255392182407598903-n.jpg",
    "https://i.ibb.co/hshKrPW/a-nh-mo-g-to-e-p-sexy-go-i-ca-m-duye-n-sa-ng-kho-ng-ta-u-o-c7.jpg",
    "https://i.ibb.co/frH4yt0/a-nh-mo-g-to-e-p-sexy-go-i-ca-m-duye-n-sa-ng-kho-ng-ta-u-o-c19.jpg",
    "https://i.ibb.co/gwYc5hw/a-nh-mo-ng-to-e-p-sexy-go-i-ca-m-quye-n-ru-hu-t-ma-t-tuye-t-e-p9.jpg",
    "https://i.ibb.co/hL9XkCD/a-nh-mo-ng-to-e-p-sexy-go-i-ca-m-quye-n-ru-hu-t-ma-t-tuye-t-e-p13.jpg",
    "https://i.ibb.co/ZG09wrh/download-1.jpg",
    "https://i.ibb.co/kqgngLx/download.jpg",
    "https://i.ibb.co/m84bj8Y/gai-xinh-khoe-mong-4.jpg",
    "https://i.ibb.co/qntCJhv/gai-xinh-khoe-mong-6.jpg",
    "https://i.ibb.co/xgRc36Z/luu-thi-phuong-thao-co-giao-nong-bong-nhat-vinh-bac-bo-hinh-5-7.jpg",
    "https://i.ibb.co/BTW54Lj/mo-ng-to-e-p-sexy-go-i-ca-m-ca-ng-tro-n-quye-n-ru-kho-o-1.jpg",
    "https://i.ibb.co/ygYttmK/mo-ng-to-e-p-sexy-go-i-ca-m-ca-ng-tro-n-quye-n-ru-kho-o-2.jpg",
    "https://i.ibb.co/3S27WnX/mo-ng-to-e-p-sexy-go-i-ca-m-ca-ng-tro-n-quye-n-ru-kho-o-3.jpg",
    "https://i.ibb.co/WD3FBqL/1.jpg",
    "https://i.ibb.co/1LXtYhR/1.png",
    "https://i.ibb.co/Db3LnbW/2.jpg",
    "https://i.ibb.co/Sd30dLy/3.jpg",
 "https://i.imgur.com/xkHatPt.jpg",
 "https://i.imgur.com/dAZMpMb.jpg",
 "https://i.imgur.com/hfVa6ur.jpg",
 "https://i.imgur.com/d1El0ga.jpg",
 "https://i.imgur.com/5aTY1wP.jpg",
 "https://i.imgur.com/6o7lkzK.jpg",
 "https://i.imgur.com/VHgHKux.jpg",
 "https://i.imgur.com/PDD0c3b.jpg",
 "https://i.imgur.com/g8Dx5ro.jpg",
 "https://i.imgur.com/dsrWtA4.jpg",
 "https://i.imgur.com/FVkLWGP.jpg",
  ];
  var max = Math.floor(Math.random() * 6);  
  var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 250000) api.sendMessage("Bạn cần 250000 đô để xem ảnh nha",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 250000})
   var callback = () => api.sendMessage({body:`Bổ mắt nhé😼\n» Số dư: -250000 đô nha bạn gì đó ơi «`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   }
};