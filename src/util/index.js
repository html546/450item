import { Toast } from 'vant'

export let callback1 = (res, fn) => {
  if (res.data.status === 1) {
    Toast.success(res.data.msg);
    fn(res);
  } else if (res.data.status === 0) {
    Toast.fail(res.data.msg)
  }
}
