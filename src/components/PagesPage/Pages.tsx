import React from 'react';
import Page from './Page';
import './Pages.css';

const Pages = () => {
  const pages = [
    {
      title: 'Page one',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque dolor voluptas eius! Dolores harum recusandae ad in sequi fugiat soluta nobis ratione ab, eius est praesentium, quam perspiciatis unde velit.',
      id: 1,
      slug: 'slug1',
    },
    {
      title: 'Page two',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus praesentium dicta ipsum optio accusantium quos voluptatem corporis accusamus possimus, fugiat tempora aliquid architecto sed veniam recusandae voluptate, nemo, harum dignissimos.',
      id: 2,
      slug: 'slug2',
    },
    {
      title: 'Page three',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste omnis tempora totam dignissimos iure veniam deleniti voluptatibus! Modi delectus iure eveniet atque velit nulla cumque tempora aut est. Incidunt, alias.',
      id: 3,
      slug: 'slug3',
    },
    {
      title: 'Page four',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, tempora. Blanditiis, repudiandae est? Magnam aliquid molestias qui omnis dolorum officiis minima quisquam, rem ab culpa expedita nesciunt sed, modi necessitatibus?',
      id: 4,
      slug: 'slug4',
    },
    {
      title: 'Page five',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, a! Adipisci, temporibus voluptatem libero ipsa saepe eaque similique fugit, qui, modi quaerat deleniti quod iste aut voluptas vitae ratione blanditiis!',
      id: 5,
      slug: 'slug5',
    },
    {
      title: 'Page six',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, sapiente qui. Eum aperiam placeat minima optio aut velit in unde vel excepturi harum, quia ipsa tempora quo atque, eos sint.',
      id: 6,
      slug: 'slug6',
    },
  ];
  return (
    <>
      <div className="container">
        <div className="pages">
          {pages.map((page) => (
            <Page title={page.title} text={page.text} key={page.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Pages;
