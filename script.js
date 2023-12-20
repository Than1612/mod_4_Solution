var names=["Thanu","Athitya","Mohan","John","Jim","Jack","Paul","justin","parker"];
for(var i=0;i<names.length;i++)
{
	var first=names[i].charAt(0);
	if(first.toLowerCase()=='j')
	{
		bye.speak(names[i]);
	}
	else
	{
		hello.speak(names[i]);
	}
};
