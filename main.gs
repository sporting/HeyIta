function doJob() {
  let Sheet = getSheet(_google_sheet_url,_google_sheet_name);
  let range = Sheet.getRange(2,1,50,5)
  let rows = range.getValues();  
  rows.forEach((row,idx)=>{
    let remind_type = row[0];
    let day_params = row[1];    
    let hour = Math.floor(row[2]/100);
    let mins = row[2]%100;
    let content = row[3];
    let last_remind_time = row[4];

    try{
      if (remind_type && content){
        let cal_dt = null;
        let today = new Date();
        switch (remind_type) {
          case "每日":
            today.setHours(hour,mins,0);
            cal_dt = today;
            break;
          case "每週":
            if (today.getDay() == day_params){
              today.setHours(hour,mins,0);
              cal_dt = today;              
            }
            break;
          case "每月":
            if (today.getDate() == day_params){
              today.setHours(hour,mins,0);
              cal_dt = today;              
            }          
            break;
          case "每年":
            let md = day_params.split('/')
            let month = md[0];
            let date = md[1];
            if ((today.getMonth()+1)==month){
              if (today.getDate()==date){
                today.setHours(hour,mins,0);
                cal_dt = today;    
              }
            }
            break;
          case "單次":
            let ymd = day_params.split('/')
            let year1 = ymd[0];
            let month1 = ymd[1];
            let date1 = ymd[2];
            if (today.getFullYear()==year1){
              if ((today.getMonth()+1)==month1){
                if (today.getDate()==date1){
                  today.setHours(hour,mins,0);
                  cal_dt = today;    
                }
              }
            }            
            break;
        }

        if (cal_dt){
          if (!hasRemind(cal_dt.getTime(),last_remind_time)){
            let now = new Date();
            if (onTime(cal_dt.getTime(),now.getTime())){
              Sheet.getRange("E"+(idx+2)).setValue(now.getTime());
              LineNotify(_line_token,content,getRandomSticker(_line_sticker_remind));
            }
          }
        }
      }
    }
    catch(e)
    {
      Logger.log(e);
    }    
  });
}

function hasRemind(cal_time,last_time){
  if (last_time==""){
    return false;
  }
  
  //5分鐘內已提醒過
  if (((last_time - cal_time) < 5*60*1000) && ((last_time - cal_time)>=0)) {
    return true;
  }

  return false;
}

function onTime(cal_time,now_time){
  if (((now_time - cal_time) < 5*60*1000) && ((now_time - cal_time)>=0)) {
    return true;
  }

  return false;
}
