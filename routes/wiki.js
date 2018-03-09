const router = require('express').Router();
const { Page } = require("../models");
const { addPage } = require('../views');
const wikipage = require('../views/wikipage');
const mainPage = require('../views/main');

router.get('/', async (req, res, next) => {
  try {
    const allPages = await Page.findAll();
    res.send(mainPage(allPages));
  } catch (error) { next(error) }
});

router.post('/', async (req, res, next) => {
  // res.json(req.body);
  const page = new Page({
    title: req.body.title,
    content: req.body.content
  });
  console.log(page);

  try {
    await page.save();
    res.redirect(`/wiki/${page.slug}`);
  } catch (error) { next(error) }
});

router.get('/add', (req, res, next) => {
  res.send(addPage());
});

router.get('/:slug', async (req, res, next) => {
  try {
    const page = await Page.findOne({
      where: {slug: req.params.slug}
    })

    res.send(wikipage(page, "Robert"));
  } catch (error) { next(error) }
})

module.exports = router;
