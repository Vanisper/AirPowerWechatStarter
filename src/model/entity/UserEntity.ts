import {
  ClassName, Dictionary, Type,
} from '../../airpower/decorator/Custom'
import { BaseEntity } from '../../base/BaseEntity'
import { UserSex } from '../enum/UserSex'
import { UserSexDictionary } from '../dictionary/UserSexDictionary'
import { RoleEntity } from './RoleEntity'

@ClassName('用户')
export class UserEntity extends BaseEntity {
  /**
   * 账号
   */
  account!: string

  /**
   * 密码
   */
  password!: string

  /**
   * 昵称
   */
  nickName!: string

  /**
   * 签名
   */
  bio!: string

  /**
   * 头像
   */
  head!: string

  /**
   * 性别
   */
  @Dictionary(UserSexDictionary) sex!: UserSex

  /**
   * 角色信息
   */
  @Type(RoleEntity) role!: RoleEntity
}