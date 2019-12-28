import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Flex from '@/components/layout/Flex'
import Figure from '@/components/layout/Figure'
import verticalFlex from '@/components/layout/verticalFlex'
import FlexTransition from '@/components/layout/FlexTransition'
import Float from '@/components/layout/Float'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/layout/flex',
      name: 'flex',
      component: Flex
    },{
      path: '/layout/figure',
      name: 'figure',
      component: Figure
    },{
      path: '/layout/verticalFlex',
      name: 'verticalFlex',
      component: verticalFlex
    },{
      path: '/layout/flexTransition',
      name: 'flexTransition',
      component: FlexTransition
    },{
      path: '/layout/float',
      name: 'float',
      component: Float
    }
  ]
})
