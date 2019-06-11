export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5cff4f19ae1015347aa1b038',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-4jbj4zcd',
                  apiId: '1de55d84-fac6-452f-ae00-b7d381967988'
                },
                {
                  buildHookId: '5cff4f19d1a2a5116f988a10',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-b3o2egtk',
                  apiId: '7f03e0cb-7ceb-4f3d-a405-b56dd5f448f7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cdanielle/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-b3o2egtk.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
