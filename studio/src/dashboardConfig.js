export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eb527c2b8216da833f0e3a9',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ns9cz137',
                  apiId: 'c37bb2b5-e5c2-4c0b-ba16-f15a59d068ba'
                },
                {
                  buildHookId: '5eb527c24120e8a3fb8a13cf',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-qvue13xt',
                  apiId: '23a5605d-6ea1-4ddc-9267-ad2f0db5109e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gilkevermander/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-qvue13xt.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
