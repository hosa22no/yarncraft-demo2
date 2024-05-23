import initializeBasicAuth from 'nextjs-basic-auth';

const users = [
  { user: 'read-50a0025a5c4deb19876cab7994c801a3', password: '8kMU98Vrx5AZortdwuDZIbzmp0u7R36/EiyOf6FD' },
];

const basicAuthCheck = initializeBasicAuth({ users });

export default basicAuthCheck;