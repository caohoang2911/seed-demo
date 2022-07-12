import {
  ApiOutlined,
  HomeOutlined,
  ShoppingOutlined,
  AppstoreAddOutlined,
  UserSwitchOutlined,
  CarOutlined,
} from '@ant-design/icons';
import { MenuProps } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

export const _nav: MenuProps['items'] & { roles?: Array<string> } = [
  {
    key: '/',
    icon: React.createElement(HomeOutlined),
    label: <Link to="/">Home</Link>,
  },
  {
    key: 'opera-order',
    icon: React.createElement(ShoppingOutlined),
    label: 'Vận hành đơn hàng',
    children: [
      {
        key: '/opera-order/list-order',
        label: <Link to="/opera-order/list-order">Danh sách đơn hàng</Link>,
      },
      {
        key: '/opera-order/auto-order',
        label: <Link to="/opera-order/auto-order">Đơn hàng tự động</Link>,
      },
      {
        key: '/opera-order/hand-order',
        label: <Link to="/opera-order/hand-order">Đơn hàng thủ công</Link>,
      },
      {
        key: '/opera-order/order-by-patch',
        label: <Link to="/opera-order/order-by-patch">Xử lý đơn hàng theo batch</Link>,
      },
      {
        key: '/opera-order/order-export',
        label: <Link to="/opera-order/order-export">Báo cáo ca</Link>,
      },
    ],
  },
  {
    key: 'monitor-order',
    icon: React.createElement(ApiOutlined),
    label: 'Quản lý đơn hàng (monitor)',
    children: [
      {
        key: '/monitor-order/customization-view',
        label: <Link to="/monitor-order/customization-view">Tạo view tùy biến</Link>,
      },
      {
        key: '/monitor-order/list-view',
        label: <Link to="/monitor-order/list-view">Danh sách các view</Link>,
      },
      {
        key: '/monitor-order/order-pending',
        label: <Link to="/monitor-order/order-pending">Đơn đang chờ xử lý</Link>,
      },
      {
        key: '/monitor-order/order-packed',
        label: <Link to="/monitor-order/order-packed">Đơn đã pack</Link>,
      },
      {
        key: '/monitor-order/order-transporting',
        label: <Link to="/monitor-order/order-transporting">Đơn đang vận chuyển</Link>,
      },
    ],
  },
  {
    key: 'khach-hang',
    icon: React.createElement(UserSwitchOutlined),
    label: 'Khách hàng',
    children: [
      {
        key: 'tim-kiem-khach-hang',
        label: 'Tìm kiếm khách hàng',
      },
      {
        key: 'danh-sach-khach-hang',
        label: 'Danh sách khách hàng',
      },
      {
        key: 'danh-sach-can-duyet',
        label: 'Danh sách cần duyệt',
      },
      {
        key: 'custom-360',
        label: 'Customer 360',
      },
    ],
  },
  {
    key: 'product-operation',
    icon: React.createElement(CarOutlined),
    label: 'Product Operation',
    children: [
      {
        key: 'danh-sach-kho',
        label: 'Danh sách kho',
      },
      {
        key: 'danh-sach-san-pham',
        label: 'Danh sách sản phẩm',
      },
      {
        key: 'xuat-kho',
        label: 'Xuất kho',
      },
      {
        key: 'nhap-kho',
        label: 'Nhập kho',
      },
      {
        key: 'chia-hang-psi',
        label: 'Chia hàng (PSI)',
      },
    ],
  },
  {
    key: 'cau-hinh-he-thong',
    icon: React.createElement(UserSwitchOutlined),
    label: 'Cấu hình hệ thống',
    children: [
      {
        key: 'cau-hinh-kho-online',
        label: 'Cấu hình kho online',
      },
      {
        key: 'cau-hinh-giao-nhan',
        label: 'Cấu hình giao nhận',
      },
      {
        key: 'cau-hinh-xu-ly-don-tu-dong',
        label: 'Cấu hình xử lý đơn tự động',
      },
      {
        key: 'cau-hinh-shortcut',
        label: 'Cấu hình shortcut',
      },
    ],
  },
  {
    key: 'tai-khoan',
    icon: React.createElement(AppstoreAddOutlined),
    label: 'Tài khoản',
    children: [
      {
        key: 'thong-bao',
        label: 'Thông báo',
      },
      {
        key: 'thong-tin-tai-khoan-profile',
        label: 'Thông tin tài khoản (profile)',
      },
      {
        key: 'danh-sach-tai-khoan-&-bo-phan',
        label: 'Danh sách tài khoản - bộ phận',
      },
      {
        key: 'quan-ly-phan-quyen',
        label: 'Quản lý phân quyền',
      },
    ],
  },
];
