import { Request, Response } from 'express';
import { sleep } from 'ts-copilot';

const resultData = new Map();
let index = 31;
for (let i = 1; i <= index; i++) {
  resultData.set(i, {
    createBy: 'admin',
    createTime: new Date().getTime(),
    updateBy: null,
    updateTime: null,
    remark: '管理员',
    userId: i,
    userName: 'admin' + i,
    nickName: 'Gavin' + i,
    email: 'admin@gmail.com',
    phoneNumber: '15888888888',
    sex: '1',
    status: '0',
    delFlag: '0',
  });
}
export default {
  'GET /api/user/list': async (_req: any, res: any) => {
    await sleep(1000);
    if (false) {
      res.json({
        success: false,
        code: 500,
        message: '用户列表操作失败',
        data: null,
        showType: 1,
      });
      return;
    }
    res.json({
      success: true,
      code: 200,
      message: '操作成功',
      data: {
        rows: [...resultData.values()],
        total: resultData.size,
      },
    });
  },
  'DELETE /api/user/:id': async (req: Request, res: Response) => {
    const { id } = req.params;
    resultData.delete(parseInt(id));
    res.json({
      success: true,
      code: 200,
      message: '操作成功',
    });
  },
  'POST /api/user': async (req: Request, res: Response) => {
    const { ...rest } = req.body;
    const userId = ++index;
    resultData.set(userId, {
      createTime: new Date(),
      userId,
      ...rest,
    });
    res.json({
      success: true,
      code: 200,
      message: '操作成功',
    });
  },
  'PUT /api/user': async (req: Request, res: Response) => {
    const { userId, ...rest } = req.body;
    const oldUser = resultData.get(parseInt(userId));
    resultData.set(userId, {
      ...oldUser,
      ...rest,
      updateTime: new Date(),
      userId,
    });
    await sleep(1000);
    res.json({
      success: true,
      code: 200,
      message: '操作成功',
    });
  },
  'GET /api/user/:id': async (req: Request, res: Response) => {
    const { id: userId } = req.params;
    const user = resultData.get(parseInt(userId));
    res.json({
      success: true,
      code: 200,
      message: '操作成功',
      data: user,
    });
  },
};
