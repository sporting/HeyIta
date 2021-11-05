function LineNotify(token,message,sticker) {
  let option = null;

  if (sticker){
    option = {
    'headers': {
      'Authorization': `Bearer ${token}`,
    },
    'method': 'post',
    'payload': {
      'message':`\n${message}`,
      'stickerPackageId': sticker['package_id'],
      'stickerId': sticker['sticker_id']
        }
    }
    
  }
  else
  {
    option = {
    'headers': {
      'Authorization': `Bearer ${token}`,
    },
    'method': 'post',
    'payload': {
      'message':`${message}`
        }
    };
  }
  UrlFetchApp.fetch('https://notify-api.line.me/api/notify', option);
}

function getRandomSticker(stickers)
{
    idx = getRandomInt(stickers.length);
    return stickers[idx];
}
//line sticker
var _line_sticker_remind = [
  {'package_id':'446','sticker_id':'2015'},
  {'package_id':'6362','sticker_id':'11087927'},
  {'package_id':'8525','sticker_id':'16581291'},
  {'package_id':'11537','sticker_id':'52002738'},
  {'package_id':'11538','sticker_id':'51626498'},
  {'package_id':'8515','sticker_id':'16581249'}];

