export const platforms = [
 {id:'instagram',name:'Instagram',limit:2200,style:'Engaging caption'},
 {id:'linkedin',name:'LinkedIn',limit:3000,style:'Professional insight'},
 {id:'x',name:'X',limit:280,style:'Short and direct'},
 {id:'facebook',name:'Facebook',limit:63206,style:'Friendly and conversational'},
 {id:'substack',name:'Substack',limit:null,style:'Newsletter introduction'},
 {id:'tumblr',name:'Tumblr',limit:null,style:'Blog-style introduction'},
 {id:'pinterest',name:'Pinterest',limit:800,style:'Search-friendly description'},
 {id:'bluesky',name:'Bluesky',limit:300,style:'Concise and thoughtful'},
 {id:'vk',name:'VK',limit:null,style:'Community post'}
] as const;
export type PlatformId = typeof platforms[number]['id'];
const endings:Partial<Record<PlatformId,string>> = {
 instagram:'\n\n#ChungBooks #Wellness #HealthyHabits',linkedin:'\n\n#Wellness #Publishing',
 pinterest:'\n\nWellness books and healthy daily routines',tumblr:'\n\n#wellness #books'
};
export function adapt(text:string,link:string,id:PlatformId,limit:number|null){
 const original=text.trim(); const suffix=(endings[id]||'')+(link.trim()?'\n\n'+link.trim():'');
 if(!limit)return original+suffix;
 const allowed=Math.max(0,limit-suffix.length);
 if(original.length<=allowed)return original+suffix;
 if(allowed===0)return suffix.slice(0,limit);
 const clipped=original.slice(0,Math.max(0,allowed-1));
 const boundary=clipped.lastIndexOf(' ');
 return (boundary>allowed*0.65?clipped.slice(0,boundary):clipped).trimEnd()+'…'+suffix;
}
