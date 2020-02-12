import Joi from '@hapi/joi';

const TopicSchema = Joi.object().keys({
    label: Joi.string().required(),
    icon: Joi.string().required(),
});

const TopicUpdateSchema = Joi.object().keys({
    label: Joi.string(),
    icon: Joi.string(),
});

export const validateTopic = (topic: any) => Joi.attempt(topic, TopicSchema);

export const validateTopicUpdate = (topic: any) => Joi.attempt(topic, TopicUpdateSchema);
