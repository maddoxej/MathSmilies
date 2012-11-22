// A count of smilies earned in the past. 
var oldSmilies = {
	// add one to the number of smilies stored and store the new value. 
	incrementSmiliesCount: function(){
		if (localStorage){
			localStorage.setItem("smiliesCount", this.getOldSmilies() + 1);
		}
	},
	
	// returns the number of old smilies saved, or 0 on error. 
	getOldSmilies: function(){
		var oldSmiliesCount = 0;
		if (localStorage) {
			try	{ 
				oldSmiliesCount = parseInt(localStorage.getItem("smiliesCount"),10) || 0;
			} catch (e){
				console.log(e);
			}		
		}
		
		return oldSmiliesCount;
	},
	
	// saves the number of old smilies. 
	setOldSmilies: function(oldSmiliesCount){
		if (localStorage) {
			localStorage.setItem("smiliesCount", oldSmiliesCount);
		}
		
		return this;
	},

	
	// if there are any saved smilies show them. Otherwise hide. 
	showOldSmilies: function(){
		var oldSmiliesCount = this.getOldSmilies();
		if (oldSmiliesCount > 0)	{
			$("#oldSmilies").show();	
			$("#oldSmilies #sCount").html(oldSmiliesCount);
		} else	{
			$("#oldSmilies").hide();	
		}
	},

	getOptions: function(){
		problemOptions = localStorage.getItem("ProblemOptions");
		try
		{
			if (problemOptions) {
				return JSON.parse(problemOptions);	
			} else {
				return {};
			}						
		} catch (e)	{
			console.log(e);
			return {};
		}		
	},
	
	setOptions: function(options){
		if (localStorage) {
			localStorage.setItem("ProblemOptions", JSON.stringify(options));
		}
	},
	
	clear: function(){
		if (localStorage) {
			localStorage.clear();
		}	
	}
	
};
