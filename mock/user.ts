export default {
  'GET /api/user': (_req: any, res: any) => {
    res.json({
      success: true,
      data: [{id:1,name:'test'}],
      errorCode: 0,
    });
  },
};
