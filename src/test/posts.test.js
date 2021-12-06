import axios from 'axios';

test('Should get posts', async () => {
  const response = axios({
    url: 'localhost:5000/posts',
    method: 'get',
  });

  const { data } = response;

  expect(data).toHaveLength(/* informar length */);

  const [firstPost] = response;
  // console.log(firstPost);
  expect(firstPost.id).toBe(/** index */);
  expect(firstPost.title).toBe(/** title name */);
});
