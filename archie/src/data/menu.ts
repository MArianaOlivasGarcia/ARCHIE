import { MenuItem } from "../dashboard/interfaces/menu-item.interface";

import icoAbout from '../assets/icons/about.png'
import icoAWS from './../assets/icons/aws-white.png'
import icoAWSBlack from './../assets/icons/aws.png'
import icoAzure from './../assets/icons/azure.png'
import icoBook from './../assets/icons/book.png'
import icoCard from './../assets/icons/card.png'
import icoCloud from './../assets/icons/cloud.png'
import icoGoogleCloud from './../assets/icons/google-cloud.png'
import icoHome from './../assets/icons/home.png'
import icoLast from './../assets/icons/last.png'
import icoTry from './../assets/icons/cloud-pink.png'


export const getMenu = ( theme: string ): MenuItem[] => {

  return [
    {
      id: 'home',
      path: '/home',
      title: 'Home',
      icon: icoHome
    },
    {
      id: 'try',
      path: '/try-me',
      title: 'Try me',
      icon: icoTry
    },
    {
      id: 'aws',
      path: '/aws',
      title: 'Amazon Web Services',
      icon: theme == 'dark' ? icoAWS : icoAWSBlack,
      children: [
        {
          id: 'aws-credentials',
          path: '/aws/get-credentials',
          title: 'Credentials & Region'
        },
        {
          id: 'aws-management',
          path: '/aws/management',
          title: 'Management',
          children: [
            {
              id: 'aws-landing-zones',
              path: '/aws/management/landing-zones',
              title: 'Landing Zones'
            },{
              id: 'aws-units-account',
              path: 'aws/management/orgunits',
              title: 'Units & Accounts'
            }
          ]
        },
        {
          id: 'aws-identity',
          path: '/aws/identity',
          title: 'Identity',
          children: [
            {
              id: 'aws-iam',
              path: '/aws/identity/iam',
              title: 'IAM'
            },{
              id: 'aws-sso',
              path: 'aws/identity/sso',
              title: 'SSO'
            }
          ]
        },
        {
          id: 'aws-networking',
          path: '/aws/networking',
          title: 'Networking',
          children: [
            {
              id: 'aws-vpcs',
              path: '/aws/networking/vpc',
              title: 'VPCs'
            },
            {
              id: 'aws-subnets',
              path: 'aws/networking/subnets',
              title: 'Subnets'
            },
            {
              id: 'aws-enpoints',
              path: 'aws/networking/endpoints',
              title: 'VPC Endpoints'
            }
          ]
        },
        {
            id: 'aws-content-delivery',
            path: '/aws/content-delivery',
            title: 'Content Delivery',
            children: [
              {
                id: 'aws-distributions',
                path: '/aws/cdn/distributions',
                title: 'Distributions'
              }
            ]
        },
        {
            id: 'aws-compute',
            path: '/aws/compute',
            title: 'Compute',
            children: [
              {
                id: 'aws-instances',
                path: '/aws/compute/instances',
                title: 'Instances'
              },
              {
                id: 'aws-security-group',
                path: '/aws/compute/security-group',
                title: 'Security Group'
              },
              {
                id: 'aws-autoscaling',
                path: '/aws/compute/autoscaling',
                title: 'Autoscaling'
              },
            ]
        },
        {
          id: 'aws-containers',
          path: '/aws/containers',
          title: 'Containers',
          children: [
            {
              id: 'aws-clusters',
              path: '/aws/containers/clusters',
              title: 'Clusters'
            },
            {
              id: 'aws-node-groups',
              path: '/aws/containers/node-groups',
              title: 'Node Groups'
            },
          ]
        },
        {
          id: 'aws-loadbalancing',
          path: '/aws/loadbalancing',
          title: 'Load Balancing',
          children: [
            {
              id: 'aws-load-balancers',
              path: '/aws/loadbalancing/load-balancers',
              title: 'Load Balancers'
            },
            {
              id: 'aws-target-groups',
              path: '/aws/loadbalancing/target-groups',
              title: 'Target Groups'
            },
          ]
        },
        {
          id: 'aws-databases',
          path: '/aws/databases',
          title: 'Databases',
          children: [
            {
              id: 'aws-rds',
              path: '/aws/databases/rds',
              title: 'RDS'
            },
            {
              id: 'aws-dynamodb',
              path: '/aws/databases/dynamodb',
              title: 'DynamoDB'
            },
          ]
        },
        {
          id: 'aws-storage',
          path: '/aws/storage',
          title: 'Storage',
          children: [
            {
              id: 'aws-buckets',
              path: '/aws/storage/buckets',
              title: 'Buckets'
            }
          ]
        },
        {
          id: 'aws-infrastructure-stacks',
          path: '/aws/infrastructure-stacks',
          title: 'Infrastructure Stacks',
        },
      ]
    },
    {
      id: 'google',
      path: '/google-cloud',
      title: 'Google Cloud Platform',
      icon: icoGoogleCloud,
      children: [
        {
          id: 'gcp-credentials',
          path: '/gcp/get-credentials',
          title: 'Credentials & Region'
        },
        {
          id: 'gcp-management',
          path: '/gcp/management',
          title: 'Management',
          children: [
            {
              id: 'gcp-landing-zones',
              path: '/gcp/management/landing-zones',
              title: 'Landing Zones'
            },{
              id: 'gcp-projects',
              path: 'gcp/management/projects',
              title: 'Folders & Policies'
            }
          ]
        },
        {
          id: 'gcp-identity',
          path: '/gcp/identity',
          title: 'Identity',
          children: [
            {
              id: 'gcp-iam',
              path: '/gcp/identity/iam',
              title: 'IAM'
            },{
              id: 'gcp-sso',
              path: 'gcp/identity/sso',
              title: 'SSO'
            }
          ]
        },
        {
          id: 'gcp-networking',
          path: '/gcp/networking',
          title: 'Networking',
          children: [
            {
              id: 'gcp-vpcs',
              path: '/gcp/networking/vpc',
              title: 'VPCs'
            },
            {
              id: 'gcp-subnets',
              path: 'gcp/networking/subnets',
              title: 'Subnets'
            }
          ]
        },
        {
            id: 'gcp-compute',
            path: '/gcp/compute',
            title: 'Compute',
            children: [
              {
                id: 'gcp-instances',
                path: '/gcp/compute/instances',
                title: 'Instances'
              },
              {
                id: 'gcp-security-group',
                path: '/gcp/compute/load-balancers',
                title: 'Load Balancers'
              }
            ]
        },
        {
          id: 'gcp-containers',
          path: '/gcp/containers',
          title: 'Containers',
          children: [
            {
              id: 'gcp-gke',
              path: '/gcp/containers/gke',
              title: 'GKE'
            }
          ]
        },
        {
          id: 'gcp-databases',
          path: '/gcp/databases',
          title: 'Databases',
          children: [
            {
              id: 'gcp-cloudsql',
              path: '/gcp/databases/cloudsql',
              title: 'CloudSQL'
            }
          ]
        },
        {
          id: 'gcp-storage',
          path: '/gcp/storage',
          title: 'Storage',
          children: [
            {
              id: 'gcp-buckets',
              path: '/gcp/storage/buckets',
              title: 'Buckets'
            }
          ]
        },
        {
          id: 'gcp-infrastructure-stacks',
          path: '/gcp/infrastructure-stacks',
          title: 'Infrastructure Stacks',
        },
      ]
    },
    {
      id: 'azure',
      path: '/azure',
      title: 'Microsoft Azure',
      icon: icoAzure
    },
    {
      id: 'multiCloud',
      path: '/multiCloud',
      title: 'MultiCloud',
      icon: icoCloud
    },
    {
      id: 'history',
      path: '/history-deletion',
      title: 'History & Deletion',
      icon: icoLast
    },
    {
      id: 'tutorial',
      path: '/tutorial',
      title: 'Tutorial & FAQ',
      icon: icoBook
    },
    {  
      id: 'about',
      path: '/about',
      title: 'About',
      icon: icoAbout,
      children: [
        {
          id: 'about-roadmap',
          path: '/about/roadmap',
          title: 'Roadmap'
        },
        {
          id: 'about-feedback',
          path: '/about/feedback',
          title: 'FeedBack'
        },
      ]
    },
    {
      id: 'pricing',
      path: '/pricing',
      title: ' Pricing Plans & Options',
      icon: icoCard
    },
  ]

}
