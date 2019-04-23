import { Toast } from 'vant'
/* export let callback1 = (res) => {
  if (res.data.status === 1) {
    Toast.success(res.data.msg)
  } else if (res.data.status === 0) {
    Toast.fail(res.data.msg)
  }
} */



export let callback1 = (res, fn) => {
  if (res.data.status === 1) {
    Toast.success(res.data.msg);
    fn();
  } else if (res.data.status === 0) {
    Toast.fail(res.data.msg)
  }
}
