# testo
Test CI pour plus tard !!!


Structuration Github:
Actual repositories:
	(public) https://github.com/IOTEROP/IOWA/
	(public) https://github.com/IOTEROP/ZephyrOS
	(private) https://github.com/IOTEROP/I-CUBE-IOWA
	(public) https://github.com/IOTEROP/iowa_stm32_cellular
	(public) https://github.com/IOTEROP/IOWA_esp32
	(private) https://github.com/IOTEROP/NEBRASKA		// To remove ...
	
Dans IOWA.git (https://github.com/IOTEROP/IOWA/)
	(branch: master)
	.images : related to README.md
	docker/
	iowa/
	samples/
	CMakeList.txt
	License.txt
	Readme.txt
	(branch: gh-pages)
		xxx.html  (doc in mkdocs)
		
REORG		
(IOWA.git)
branch: master
 iowa_core
	src/
	include/
	doc/
	LICENCE.txt
	README?md
 samples/
	baseline_client
	...
 hardware/
	esp32
	NordicRF
	STM32
	
branch: gh_pages
	generated docs
	
----------------------------------------------------------
INPUT:
iowa_core:
	generated from LTS
		(unifdef.sh)
samples/
	Todo:
		All samples from LTS ?
hardware/
    manually added ?

docs (ioterop.github.io/IOWA)
	branch gh_pages
	gh_actions: generate PDF when pushed !
		
		
	

	
	
		