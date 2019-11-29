module.exports = {
    plugins: [{
        resolve: "gatsby-theme-blog-with-github",
        options: {
            // your github username - required
            username: "fydy",
            
			// github public repository name that you will use as a CMS - required
            repositoryName: "elaw",
            
            metaData: {
                // website name - required
                title: `E-Law`,
                
				// cover letter - required
                description: `分享`,

				// author name
                author: `fydy`, 

				// your github url for photo - required
                githubURL: `https://github.com/fydy`, 
                social: [{
                        name: `twitter`,
                        url: `https://twitter.com/chunfengxia`,
                    },
                    {
                        name: `github`,
                        url: `https://github.com/fydy`,
                    },
                ]
            }
        }
    }]
};
