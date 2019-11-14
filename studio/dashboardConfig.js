export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5dcde2782570808a9bab3eea',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-v9cb84h2',
                  apiId: 'bfc215b4-668b-40af-bd53-9dc0b4fc11dd'
                },
                {
                  buildHookId: '5dcde27888327ee19384885a',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-52ymqqxj',
                  apiId: '234233d3-aeb0-48d4-9092-9e8c680dab64'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ti-rudin/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-52ymqqxj.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
