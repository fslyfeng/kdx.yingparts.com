<?php
/**
 * 开店星新零售管理系统
 * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开
 * @author 青岛开店星信息技术有限公司
 * @link https://www.kaidianxing.com
 * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.
 * @copyright 版权归青岛开店星信息技术有限公司所有
 * @warning Unauthorized deletion of copyright information is prohibited.
 * @warning 未经许可禁止私自删除版权信息
 */

namespace shopstar\helpers;

use shopstar\constants\CacheTypeConstant;
use Yii;
use yii\caching\CacheInterface;
use yii\caching\Dependency;

/**
 * 缓存助手
 * Class Cache
 * @package shopstar\helpers
 * @author 青岛开店星信息技术有限公司
 */
class CacheHelper
{

    /**
     * @var \yii\caching\CacheInterface $cache
     */
    private static $cache;

    /**
     * @param CacheInterface $cache
     * @return void
     * @author 青岛开店星信息技术有限公司
     */
    public static function setCacheClass(CacheInterface $cache)
    {
        self::$cache = $cache;
    }

    /**
     * 删除缓存
     * @author 青岛开店星信息技术有限公司
     */
    public static function delCacheClass()
    {
        self::$cache = null;
    }

    /**
     * 循环检测生成
     * @param string $prefix
     * @param int $length
     * @return string
     * @author 青岛开店星信息技术有限公司
     */
    public static function circular(string $prefix = '', int $length = 12): string
    {
        while (true) {
            $code = StringHelper::random($length, true);
            $isExist = self::get($prefix . $code);
            if (empty($isExist)) {
                return $code;
            }
        }
    }

    /**
     * @return \yii\caching\CacheInterface
     * @author 青岛开店星信息技术有限公司
     */
    public static function getCacheClass(): CacheInterface
    {
        return self::$cache ?? Yii::$app->cache;
    }

    /**
     * 获取缓存
     * Retrieves a value from cache with a specified key.
     * @param mixed $key a key identifying the cached value. This can be a simple string or
     * a complex data structure consisting of factors representing the key.
     * @return mixed the value stored in cache, false if the value is not in the cache, expired,
     * or the dependency associated with the cached data has changed.
     */
    public static function get($key, $defaultValue = '')
    {
        $cache = static::getCacheClass()->get($key);
        if (empty($cache)) {
            return $defaultValue;
        }
        return $cache;
    }

    /**
     * Stores a value identified by a key into cache.
     * If the cache already contains such a key, the existing value and
     * expiration time will be replaced with the new ones, respectively.
     *
     * @param mixed $key a key identifying the value to be cached. This can be a simple string or
     * a complex data structure consisting of factors representing the key.
     * @param mixed $value the value to be cached
     * @param int $duration default duration in seconds before the cache will expire. If not set,
     * default [[defaultDuration]] value is used.
     * @param Dependency $dependency dependency of the cached item. If the dependency changes,
     * the corresponding value in the cache will be invalidated when it is fetched via [[get()]].
     * This parameter is ignored if [[serializer]] is false.
     * @return bool whether the value is successfully stored into cache
     */
    public static function set($key, $value, $duration = null, $dependency = null)
    {
        return static::getCacheClass()->set($key, $value, $duration, $dependency);
    }

    /**
     * Builds a normalized cache key from a given key.
     *
     * If the given key is a string containing alphanumeric characters only and no more than 32 characters,
     * then the key will be returned back prefixed with [[keyPrefix]]. Otherwise, a normalized key
     * is generated by serializing the given key, applying MD5 hashing, and prefixing with [[keyPrefix]].
     *
     * @param mixed $key the key to be normalized
     * @return string the generated cache key
     */
    public static function buildKey($key)
    {
        return static::getCacheClass()->buildKey($key);
    }

    /**
     * Checks whether a specified key exists in the cache.
     * This can be faster than getting the value from the cache if the data is big.
     * In case a cache does not support this feature natively, this method will try to simulate it
     * but has no performance improvement over getting it.
     * Note that this method does not check whether the dependency associated
     * with the cached data, if there is any, has changed. So a call to [[get]]
     * may return false while exists returns true.
     * @param mixed $key a key identifying the cached value. This can be a simple string or
     * a complex data structure consisting of factors representing the key.
     * @return bool true if a value exists in cache, false if the value is not in the cache or expired.
     */
    public static function exists($key): bool
    {
        return static::getCacheClass()->exists($key);
    }

    /**
     * Retrieves multiple values from cache with the specified keys.
     * Some caches (such as memcache, apc) allow retrieving multiple cached values at the same time,
     * which may improve the performance. In case a cache does not support this feature natively,
     * this method will try to simulate it.
     * @param string[] $keys list of string keys identifying the cached values
     * @return array list of cached values corresponding to the specified keys. The array
     * is returned in terms of (key, value) pairs.
     * If a value is not cached or expired, the corresponding array value will be false.
     */
    public static function multiGet(array $keys): array
    {
        return static::getCacheClass()->multiGet($keys);
    }

    /**
     * Stores multiple items in cache. Each item contains a value identified by a key.
     * If the cache already contains such a key, the existing value and
     * expiration time will be replaced with the new ones, respectively.
     *
     * @param array $items the items to be cached, as key-value pairs.
     * @param int $duration default number of seconds in which the cached values will expire. 0 means never expire.
     * @param Dependency|null $dependency dependency of the cached items. If the dependency changes,
     * the corresponding values in the cache will be invalidated when it is fetched via [[get()]].
     * This parameter is ignored if [[serializer]] is false.
     * @return array array of failed keys
     */
    public function multiSet(array $items, int $duration = 0, Dependency $dependency = null): array
    {
        return static::getCacheClass()->multiSet($items, $duration, $dependency);
    }

    /**
     * Stores a value identified by a key into cache if the cache does not contain this key.
     * Nothing will be done if the cache already contains the key.
     * @param mixed $key a key identifying the value to be cached. This can be a simple string or
     * a complex data structure consisting of factors representing the key.
     * @param mixed $value the value to be cached
     * @param int $duration the number of seconds in which the cached value will expire. 0 means never expire.
     * @param Dependency|null $dependency dependency of the cached item. If the dependency changes,
     * the corresponding value in the cache will be invalidated when it is fetched via [[get()]].
     * This parameter is ignored if [[serializer]] is false.
     * @return bool whether the value is successfully stored into cache
     */
    public static function add($key, $value, int $duration = 0, Dependency $dependency = null): bool
    {
        return static::getCacheClass()->add($key, $value, $duration, $dependency);
    }

    /**
     * Stores multiple items in cache. Each item contains a value identified by a key.
     * If the cache already contains such a key, the existing value and expiration time will be preserved.
     *
     * @param array $items the items to be cached, as key-value pairs.
     * @param int $duration default number of seconds in which the cached values will expire. 0 means never expire.
     * @param Dependency|null $dependency dependency of the cached items. If the dependency changes,
     * the corresponding values in the cache will be invalidated when it is fetched via [[get()]].
     * This parameter is ignored if [[serializer]] is false.
     * @return array array of failed keys
     */
    public static function multiAdd(array $items, int $duration = 0, Dependency $dependency = null): array
    {
        return static::getCacheClass()->multiAdd($items, $duration, $dependency);
    }

    /**
     * Deletes a value with the specified key from cache.
     * @param mixed $key a key identifying the value to be deleted from cache. This can be a simple string or
     * a complex data structure consisting of factors representing the key.
     * @return bool if no error happens during deletion
     */
    public static function delete($key): bool
    {
        return static::getCacheClass()->delete($key);
    }

    /**
     * Deletes all values from cache.
     * Be careful of performing this operation if the cache is shared among multiple applications.
     * @return bool whether the flush operation was successful.
     */
    public static function flush(): bool
    {
        return static::getCacheClass()->flush();
    }

    /**
     * Method combines both [[set()]] and [[get()]] methods to retrieve value identified by a $key,
     * or to store the result of $callable execution if there is no cache available for the $key.
     *
     * Usage example:
     *
     * ```php
     * public function getTopProducts($count = 10) {
     *     $cache = $this->cache; // Could be Yii::$app->cache
     *     return $cache->getOrSet(['top-n-products', 'n' => $count], function ($cache) use ($count) {
     *         return Products::find()->mostPopular()->limit($count)->all();
     *     }, 1000);
     * }
     * ```
     *
     * @param mixed $key a key identifying the value to be cached. This can be a simple string or
     * a complex data structure consisting of factors representing the key.
     * @param callable|\Closure $callable the callable or closure that will be used to generate a value to be cached.
     * In case $callable returns `false`, the value will not be cached.
     * @param int $duration default duration in seconds before the cache will expire. If not set,
     * [[defaultDuration]] value will be used.
     * @param Dependency $dependency dependency of the cached item. If the dependency changes,
     * the corresponding value in the cache will be invalidated when it is fetched via [[get()]].
     * This parameter is ignored if [[serializer]] is `false`.
     * @return mixed result of $callable execution
     */
    public static function getOrSet($key, $callable, $duration = null, $dependency = null)
    {
        return static::getCacheClass()->getOrSet($key, $callable, $duration, $dependency);
    }

    /**
     * 获取缓存KEY
     * @param $cacheType
     * @param null $params
     * @return string
     * @throws \Exception
     * @author 青岛开店星信息技术有限公司
     */
    public static function getKey($cacheType, $params = null): string
    {
        self::checkCacheTypeDefined($cacheType);

        $cacheKey = sprintf('%s:%s:%s', 'kdx:shop',
            CacheTypeConstant::CACHE_DEFINE[$cacheType]['key'], CacheTypeConstant::CACHE_DEFINE[$cacheType]['type']);

        if (!empty($params)){
            $params   = is_array($params) ? $params : array($params);
            $cacheKey .= ':'.implode('_', $params);
        }

        return $cacheKey;
    }

    /**
     * 获取缓存时长
     * @param $cacheType
     * @return mixed
     * @throws \Exception
     * @author 青岛开店星信息技术有限公司
     */
    public static function getExpire($cacheType)
    {
        self::checkCacheTypeDefined($cacheType);

        return CacheTypeConstant::CACHE_DEFINE[$cacheType]['expire'];
    }

    /**
     * @param $cacheType
     * @throws \Exception
     * @author 青岛开店星信息技术有限公司
     */
    private static function checkCacheTypeDefined($cacheType)
    {
        if (empty(CacheTypeConstant::CACHE_DEFINE[$cacheType])) {
            throw new \Exception("Cache type '{$cacheType}' not defined");
        }
    }

}
