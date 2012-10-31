function WebsiteListCtrl($scope, $http)
{
	// Get skills list
	$http.get('skills/skills.json').success(function(data){
		$scope.skills = data;

		// Get websites list
		$http.get('websites/websites.json').success(function(data){
			$scope.websites = data;
			
			// 
			for(var i = 0; i < $scope.skills.length; i++)
			{
				skillCategory = $scope.skills[i];
				for(var j = 0; j < skillCategory.skills.length; j++)
				{
					skill = skillCategory.skills[j];
					for (var k = 0; k < $scope.websites.length; k++)
					{
						website = $scope.websites[k];
						for (var l = 0; l < website.skills.length; l++) 
						{
							websiteSkill = website.skills[l];
							if(websiteSkill == skill.name)
							{
								skill.proficiency++;
								//console.log(websiteSkill + ':' + skill.proficiency);
							}
						}
					}
				}
			}
		});
	});
	$scope.skillsOrder = 'proficiency';
	$scope.websitesOrder = 'date';

	// Update skill when checked
	$scope.checkSkill = function(skill) {
		if(skill.checked)
		{
			skill.checked = false;
		}
		else
		{
			skill.checked = true;
		}
	}

	// Filter to display websites whom at less one skill is checked
	$scope.skillsFilter = function(websiteToFilter) {
		skillChecked = false;
		for(var i = 0; i < $scope.skills.length; i++)
		{
			skillCategory = $scope.skills[i];
			for(var j = 0; j < skillCategory.skills.length; j++)
			{
				skill = skillCategory.skills[j];
				if(skill.checked)
				{
					skillChecked = true;
					for (var k = 0; k < websiteToFilter.skills.length; k++) 
					{
						websiteSkill = websiteToFilter.skills[k];
						if(websiteSkill == skill.name)
						{
							return true;
						}
					}

				}
			}
		}
		return !skillChecked;
	};

	// Filter to display only IDEA CONSEIL websites
	$scope.ideaFilter = function(websiteToFilter) {
		if(websiteToFilter.firm != 'IDEA Conseil')
		{
			return false;
		}
		else
		{
			return $scope.skillsFilter(websiteToFilter);
		}
	};
	
	// Filter to display only OMYCODE websites
	$scope.omycodeFilter = function(websiteToFilter) {
		if(websiteToFilter.firm != 'Développeur indépendant')
		{
			return false;
		}
		else
		{
			return $scope.skillsFilter(websiteToFilter);
		}
	};
}
WebsiteListCtrl.$inject = ['$scope', '$http'];
